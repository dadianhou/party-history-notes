from __future__ import annotations

import json
import urllib.parse
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BV = "BV1Nu4y1x7y9"
API = f"https://api.bilibili.com/x/web-interface/view?bvid={BV}"


def format_duration(seconds: int) -> str:
    minutes, seconds = divmod(int(seconds), 60)
    hours, minutes = divmod(minutes, 60)
    if hours:
        return f"{hours}:{minutes:02d}:{seconds:02d}"
    return f"{minutes}:{seconds:02d}"


def split_category(part: str) -> str:
    return part.split("：", 1)[0] if "：" in part else "其他"


def main() -> None:
    request = urllib.request.Request(
        API,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36",
            "Referer": f"https://www.bilibili.com/video/{BV}",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.load(response)
    pages = payload["data"]["pages"]
    lessons = []
    for page in pages:
        number = int(page["page"])
        lesson_id = f"p{number}"
        title = page["part"].strip()
        category = split_category(title)
        lessons.append(
            {
                "id": lesson_id,
                "page": number,
                "type": category,
                "title": title,
                "duration": format_duration(page["duration"]),
                "durationSeconds": page["duration"],
                "cid": page["cid"],
                "sourceUrl": f"https://www.bilibili.com/video/{BV}?p={number}",
                "transcriptPath": f"transcripts/{lesson_id}.txt",
                "transcriptStatus": "available" if (ROOT / "transcripts" / f"{lesson_id}.txt").exists() else "pending",
            }
        )
    manifest = {
        "course": {
            "bvid": BV,
            "title": payload["data"]["title"],
            "description": payload["data"]["desc"],
            "totalLessons": len(lessons),
            "totalDurationSeconds": sum(item["durationSeconds"] for item in lessons),
        },
        "lessons": lessons,
    }
    (ROOT / "course-manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"wrote {len(lessons)} lessons to {ROOT / 'course-manifest.json'}")


if __name__ == "__main__":
    main()
