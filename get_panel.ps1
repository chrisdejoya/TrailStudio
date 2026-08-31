$content = Get-Content D:\Dev\TrailStudio\index.html -Raw

# Get the exact old panel content
$idx = $content.IndexOf('Material & Transform')
$start = $content.LastIndexOf('<div class="panel">', $idx)
$endIdx = $content.IndexOf('</div>', $content.IndexOf('Trail Offset') + 50)
# Find the closing </div> for the panel
$panelEnd = $content.IndexOf('</div>', $endIdx + 6)
$oldPanel = $content.Substring($start, $panelEnd - $start + 6)

Write-Host "Old panel length: $($oldPanel.Length)"
Write-Host "---"
Write-Host $oldPanel
Write-Host "---"