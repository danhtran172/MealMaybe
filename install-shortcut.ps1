# Tạo shortcut "Meal Maybe" trên Desktop và Start Menu.
# App mở trong cửa sổ riêng (chế độ --app của Edge/Chrome), không có thanh địa chỉ.
# Gỡ: .\install-shortcut.ps1 -Remove
param([switch]$Remove)
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$targets = @(
  (Join-Path ([Environment]::GetFolderPath('Desktop')) 'Meal Maybe.lnk'),
  (Join-Path ([Environment]::GetFolderPath('Programs')) 'Meal Maybe.lnk')
)

if ($Remove) {
  $targets | Where-Object { Test-Path $_ } | ForEach-Object { Remove-Item $_; "Đã gỡ $_" }
  return
}

$browser = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'Không tìm thấy Edge hoặc Chrome.' }

$uri = ([Uri](Join-Path $root 'index.html')).AbsoluteUri
$shell = New-Object -ComObject WScript.Shell
foreach ($path in $targets) {
  $lnk = $shell.CreateShortcut($path)
  $lnk.TargetPath = $browser
  $lnk.Arguments = "--app=`"$uri`" --window-size=460,900"
  $lnk.WorkingDirectory = $root
  $lnk.IconLocation = (Join-Path $root 'icons\meal-maybe.ico') + ',0'
  $lnk.Description = 'Meal Maybe - xào bài, rút lá, chốt món'
  $lnk.Save()
  "Đã tạo $path"
}
