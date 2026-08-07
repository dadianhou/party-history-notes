param(
  [Parameter(Mandatory = $true)]
  [int]$ParentId
)

$repo = Split-Path -Parent $PSScriptRoot
while (Get-Process -Id $ParentId -ErrorAction SilentlyContinue) {
  Start-Sleep -Seconds 30
}

Set-Location -LiteralPath $repo
python scripts\generate-course-manifest.py
git add course-manifest.json transcripts\*.txt transcripts\*.json
if (git status --porcelain) {
  git commit -m "Publish completed course transcription batch"
  git push origin main
}
