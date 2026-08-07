from __future__ import annotations

import argparse
import json
import subprocess
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

from faster_whisper import WhisperModel


ROOT = Path(__file__).resolve().parents[1]
TMP = ROOT.parent / "tmp" / "course-audio"
BV = "BV1Nu4y1x7y9"


def run_ytdlp(page: int, audio: Path) -> None:
    audio.parent.mkdir(parents=True, exist_ok=True)
    if audio.exists() and audio.stat().st_size > 1024:
        return
    command = [
        "python", "-m", "yt_dlp", "--no-playlist", "--no-warnings",
        "--format", "ba[ext=m4a]/bestaudio",
        "--output", str(audio.with_suffix(".%(ext)s")),
        f"https://www.bilibili.com/video/{BV}?p={page}",
    ]
    subprocess.run(command, check=True)
    candidates = list(audio.parent.glob(f"{audio.stem}.*"))
    if not candidates:
        raise FileNotFoundError(f"yt-dlp did not create audio for p{page}")
    if candidates[0] != audio:
        candidates[0].replace(audio)


def transcribe_one(page: int) -> str:
    output = ROOT / "transcripts" / f"p{page}.txt"
    if output.exists() and output.stat().st_size > 100:
        return f"skip p{page}"
    audio = TMP / f"p{page}.m4a"
    run_ytdlp(page, audio)
    model = WhisperModel("tiny", device="cpu", compute_type="int8")
    segments, info = model.transcribe(
        str(audio), language="zh", beam_size=1, vad_filter=False,
        condition_on_previous_text=False,
    )
    rows = []
    for segment in segments:
        text = segment.text.strip()
        if text:
            rows.append({"start": round(segment.start, 2), "end": round(segment.end, 2), "text": text})
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        "\n".join(f"[{row['start']:08.2f}-{row['end']:08.2f}] {row['text']}" for row in rows),
        encoding="utf-8",
    )
    metadata = output.with_suffix(".json")
    metadata.write_text(
        json.dumps({"page": page, "language": info.language, "duration": info.duration, "segments": len(rows)}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    return f"done p{page}: {len(rows)} segments"


def main() -> None:
    parser = argparse.ArgumentParser(description="Resume-able Bilibili course audio transcription")
    parser.add_argument("--start", type=int, default=1)
    parser.add_argument("--end", type=int, default=143)
    parser.add_argument("--workers", type=int, default=2)
    args = parser.parse_args()
    pages = list(range(max(1, args.start), min(143, args.end) + 1))
    with ProcessPoolExecutor(max_workers=max(1, args.workers)) as pool:
        futures = {pool.submit(transcribe_one, page): page for page in pages}
        for future in as_completed(futures):
            page = futures[future]
            try:
                print(future.result(), flush=True)
            except Exception as exc:
                print(f"failed p{page}: {exc}", flush=True)


if __name__ == "__main__":
    main()
