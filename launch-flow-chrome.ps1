# =============================================================================
#  Launch the Chrome instance the Google Flow MCP drives.
#  Run:  powershell -ExecutionPolicy Bypass -File C:\erlytrix\launch-flow-chrome.ps1
#
#  Two Chrome facts this works around:
#
#  1. Since Chrome 136, --remote-debugging-port is silently ignored on the
#     DEFAULT user-data-dir. The port only opens on a non-default dir, so the
#     MCP gets its own at $DebugData.
#
#  2. Since Chrome 127, cookies are sealed with app-bound encryption. Copying
#     Profile 1's cookie DB into another user-data-dir yields a file Chrome
#     cannot decrypt, so the copy lands logged OUT. There is no way around it:
#     you sign in to $DebugData ONCE, by hand, and it persists from then on.
#
#  -Reset wipes the debug profile and makes you sign in again. Only useful if
#  the stored session breaks.
# =============================================================================

param([switch]$Reset)

$ErrorActionPreference = "Stop"

$ChromeExe = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$DebugData = "C:\dev\chrome-flow-profile"
$ProfileNm = "Profile 1"          # must match chromeProfile in config\flow.config.json
$Account   = "sheikxm05@gmail.com"
$Port      = 9222

if (-not (Test-Path $ChromeExe)) { throw "Chrome not found at $ChromeExe" }

if ($Reset -and (Test-Path $DebugData)) {
    Write-Host "Resetting debug profile (you will need to sign in again)..." -ForegroundColor Yellow
    Get-Process chrome -ErrorAction SilentlyContinue |
        Where-Object { $_.Path -eq $ChromeExe } | Stop-Process -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
    Remove-Item $DebugData -Recurse -Force -ErrorAction SilentlyContinue
}

# Already listening? Reuse it rather than starting a second instance.
if (-not $Reset) {
    try {
        $v = Invoke-WebRequest "http://127.0.0.1:$Port/json/version" -UseBasicParsing -TimeoutSec 3
        Write-Host "CDP already live on $Port - reusing it." -ForegroundColor Green
        ($v.Content | ConvertFrom-Json).Browser
        exit 0
    } catch { }
}

$firstRun = -not (Test-Path "$DebugData\$ProfileNm")
New-Item -ItemType Directory -Force "$DebugData\$ProfileNm" | Out-Null

Start-Process $ChromeExe -ArgumentList `
    "--remote-debugging-port=$Port", `
    "--user-data-dir=$DebugData", `
    "--profile-directory=$ProfileNm", `
    '--no-first-run', '--no-default-browser-check', `
    '--disable-blink-features=AutomationControlled', `
    'https://labs.google/fx/tools/flow'

foreach ($i in 1..15) {
    try {
        $v = Invoke-WebRequest "http://127.0.0.1:$Port/json/version" -UseBasicParsing -TimeoutSec 3
        Write-Host "`nCDP live on $Port - $(($v.Content | ConvertFrom-Json).Browser)" -ForegroundColor Green
        if ($firstRun) {
            Write-Host "`nThis profile is new and therefore signed out." -ForegroundColor Yellow
            Write-Host "Sign in as $Account in that Chrome window, then reach Flow." -ForegroundColor Yellow
            Write-Host "You only have to do this once - the session persists in $DebugData." -ForegroundColor Yellow
        }
        exit 0
    } catch { Start-Sleep -Seconds 2 }
}

throw "Chrome started but CDP never opened on $Port."
