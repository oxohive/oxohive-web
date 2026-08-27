# =============================================================================
#  Google Flow MCP - setup for Windows  (v2)
#  Run:  powershell -ExecutionPolicy Bypass -File C:\erlytrix\setup-flow-mcp.ps1
#
#  v2 fixes: the repo is plain ESM JavaScript - there is no build step and no
#  dist/ folder. Entry point is src/index.js. Config is now derived from the
#  repo's own example file so every required key is present.
# =============================================================================

$ErrorActionPreference = "Stop"

$RepoDir    = "C:\dev\google-flow-browser-mcp"
$EntryPoint = "$RepoDir\src\index.js"
$ChromeExe  = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$ChromeData = "$env:LOCALAPPDATA\Google\Chrome\User Data"
# discovered at runtime - the VS Code extension auto-updates, so never pin a version
$ClaudeExe  = Get-ChildItem "$env:USERPROFILE\.vscode\extensions" -Directory -Filter "anthropic.claude-code-*" -ErrorAction SilentlyContinue |
    Sort-Object Name -Descending | Select-Object -First 1 |
    ForEach-Object { Join-Path $_.FullName "resources\native-binary\claude.exe" }

function Step($n, $msg) { Write-Host "`n[$n] $msg" -ForegroundColor Cyan }
function Ok($msg)       { Write-Host "    $msg" -ForegroundColor Green }

# ---------------------------------------------------------------------------
Step 1 "Checking the clone"
# ---------------------------------------------------------------------------
if (-not (Test-Path $RepoDir)) {
    New-Item -ItemType Directory -Force "C:\dev" | Out-Null
    git clone --quiet https://github.com/TMSSS05/google-flow-browser-mcp.git $RepoDir
}
if (-not (Test-Path "$RepoDir\node_modules")) {
    Push-Location $RepoDir
    npm install --no-audit --no-fund
    Pop-Location
}
if (-not (Test-Path $EntryPoint)) {
    Write-Host "    ERROR: $EntryPoint not found" -ForegroundColor Red
    exit 1
}
Ok "entry point OK -> src\index.js (no build step needed)"

# ---------------------------------------------------------------------------
Step 2 "Pick the Chrome profile signed into your Google AI Pro account"
# ---------------------------------------------------------------------------
Write-Host ""
Get-ChildItem $ChromeData -Directory |
    Where-Object { $_.Name -eq "Default" -or $_.Name -like "Profile *" } |
    ForEach-Object {
        $pref = Join-Path $_.FullName "Preferences"
        $email = "(none)"
        if (Test-Path $pref) {
            try {
                $j = Get-Content $pref -Raw -Encoding UTF8 | ConvertFrom-Json
                if ($j.account_info -and @($j.account_info).Count -gt 0) {
                    $email = @($j.account_info)[0].email
                } elseif ($j.profile.name) {
                    $email = $j.profile.name
                }
            } catch {}
        }
        "{0,-12} {1}" -f $_.Name, $email | Write-Host
    }

Write-Host ""
Write-Host "Enter the LEFT column value (e.g. 'Profile 1'), NOT the email." -ForegroundColor Yellow
do {
    $profileName = (Read-Host "Profile folder name").Trim()
    if (-not $profileName -or -not (Test-Path (Join-Path $ChromeData $profileName))) {
        Write-Host "  not a real profile folder - try again" -ForegroundColor Red
        $profileName = ""
    }
} while (-not $profileName)

do { $account = (Read-Host "Gmail address on that profile").Trim() } while (-not $account)

# ---------------------------------------------------------------------------
Step 3 "Writing config\flow.config.json from the repo example"
# ---------------------------------------------------------------------------
$cfg = Get-Content "$RepoDir\config\flow.config.example.json" -Raw | ConvertFrom-Json

$cfg.expectedAccount   = $account
$cfg.chromeProfile     = $profileName
$cfg.chromeUserDataDir = $ChromeData
$cfg.flowUrl           = "https://labs.google/fx/tools/flow"   # en, not the fr default
$cfg.locale            = "en"
$cfg.flowHome          = $RepoDir -replace '\\','/'

$cfg | ConvertTo-Json -Depth 12 | Set-Content "$RepoDir\config\flow.config.json" -Encoding UTF8
Ok "config written (all keys from the example preserved)"

# ---------------------------------------------------------------------------
Step 4 "Registering the MCP server with Claude Code"
# ---------------------------------------------------------------------------
if (-not $ClaudeExe -or -not (Test-Path $ClaudeExe)) {
    Write-Host "    claude.exe not found - register manually:" -ForegroundColor Red
    Write-Host "    claude mcp add google-flow --scope user -- node `"$EntryPoint`"" -ForegroundColor White
} else {
    Ok "using $ClaudeExe"
    & $ClaudeExe mcp remove google-flow --scope user 2>$null | Out-Null
    & $ClaudeExe mcp add google-flow --scope user -- node $EntryPoint
}

# ---------------------------------------------------------------------------
Write-Host "`n=============================================================" -ForegroundColor Yellow
Write-Host " DONE - two manual steps left" -ForegroundColor Yellow
Write-Host "=============================================================`n" -ForegroundColor Yellow

Write-Host "1. QUIT CHROME COMPLETELY (check the system tray), then run:`n"
Write-Host "   & `"$ChromeExe`" --remote-debugging-port=9222 --profile-directory=`"$profileName`"" -ForegroundColor White
Write-Host "`n   In that window open:  https://labs.google/fx/tools/flow"
Write-Host "   Make sure you are signed in as $account`n"
Write-Host "2. RESTART CLAUDE CODE - MCP servers only load at session start.`n"
Write-Host "Then say: 'generate the assets from PROMPTS.txt'`n" -ForegroundColor Cyan
Write-Host "Model names available in this build:" -ForegroundColor DarkGray
Write-Host "  images: Nano Banana Pro / Nano Banana 2 / Imagen 4" -ForegroundColor DarkGray
Write-Host "  video : Veo 3.1 Lite / Fast / Quality  (test on Fast, finish on Quality)" -ForegroundColor DarkGray
