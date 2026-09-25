# Render icons/icon.svg thành PNG (PWA) và .ico (shortcut Windows) bằng Edge/Chrome headless.
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$icons = Join-Path $root 'icons'
$render = ([Uri](Join-Path $root 'tools\icon-render.html')).AbsoluteUri
$browser = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'Không tìm thấy Edge hoặc Chrome.' }

$tmp = Join-Path $env:TEMP 'meal-maybe-icons'
New-Item -ItemType Directory -Force $tmp | Out-Null

function Shoot([int]$size, [string]$out, [string]$query) {
  if (Test-Path $out) { Remove-Item $out }
  $argv = @(
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
    '--default-background-color=00000000', "--user-data-dir=$tmp\profile",
    "--window-size=$size,$size", "--screenshot=$out", "$render$query"
  )
  Start-Process -FilePath $browser -ArgumentList $argv -Wait -WindowStyle Hidden
  for ($i = 0; $i -lt 50 -and -not (Test-Path $out); $i++) { Start-Sleep -Milliseconds 100 }
  if (-not (Test-Path $out)) { throw "Không render được $out" }
}

function Resize([string]$src, [int]$size, [string]$dst) {
  $img = [System.Drawing.Image]::FromFile($src)
  $bmp = New-Object System.Drawing.Bitmap $size, $size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.DrawImage($img, 0, 0, $size, $size)
  $g.Dispose(); $img.Dispose()
  $bmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}

$master = Join-Path $tmp 'master.png'
$masterMask = Join-Path $tmp 'master-maskable.png'
Shoot 1024 $master ''
Shoot 1024 $masterMask '?maskable'

Resize $master 512 (Join-Path $icons 'icon-512.png')
Resize $master 192 (Join-Path $icons 'icon-192.png')
Resize $masterMask 512 (Join-Path $icons 'icon-maskable-512.png')

# .ico gồm nhiều cỡ, mỗi cỡ là một ảnh PNG
$sizes = 16, 24, 32, 48, 64, 128, 256
$pngs = foreach ($s in $sizes) {
  $p = Join-Path $tmp "ico-$s.png"
  Resize $master $s $p
  , [IO.File]::ReadAllBytes($p)
}
$ms = New-Object IO.MemoryStream
$bw = New-Object IO.BinaryWriter $ms
$bw.Write([UInt16]0); $bw.Write([UInt16]1); $bw.Write([UInt16]$sizes.Count)
$offset = 6 + 16 * $sizes.Count
for ($i = 0; $i -lt $sizes.Count; $i++) {
  $s = $sizes[$i] % 256
  $bw.Write([byte]$s); $bw.Write([byte]$s); $bw.Write([byte]0); $bw.Write([byte]0)
  $bw.Write([UInt16]1); $bw.Write([UInt16]32)
  $bw.Write([UInt32]$pngs[$i].Length); $bw.Write([UInt32]$offset)
  $offset += $pngs[$i].Length
}
foreach ($d in $pngs) { $bw.Write($d) }
$bw.Flush()
[IO.File]::WriteAllBytes((Join-Path $icons 'meal-maybe.ico'), $ms.ToArray())

Get-ChildItem $icons | Select-Object Name, Length

