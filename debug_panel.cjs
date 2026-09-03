const fs = require('fs');
const content = fs.readFileSync('D:\\Dev\\TrailStudio\\ui\\ui.html', 'utf8');

// Find the exact panel boundaries
const startMarker = '<!-- Image Based Lighting Panel -->';
const endMarker = '    <!-- Sun 1 Panel -->';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker, startIdx);

if (startIdx === -1 || endIdx === -1) {
    console.log('Could not find panel boundaries');
    process.exit(1);
}

console.log('Found panel from index', startIdx, 'to', endIdx);
console.log('Panel length:', endIdx - startIdx);

const panelContent = content.substring(startIdx, endIdx);
console.log('--- PANEL CONTENT ---');
console.log(panelContent);
console.log('--- END PANEL ---');