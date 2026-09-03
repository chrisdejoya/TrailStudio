const fs = require('fs');
let content = fs.readFileSync('D:\\Dev\\TrailStudio\\ui\\ui.html', 'utf8');
content = content.replace(/\r\n/g, '\n');

const startIdx = content.indexOf('<!-- Image Based Lighting Panel -->');
const endIdx = content.indexOf('    <!-- Sun 1 Panel -->', startIdx);

const panelContent = content.substring(startIdx, endIdx);
console.log('Panel content (first 200 chars):');
console.log(JSON.stringify(panelContent.substring(0, 200)));
console.log('...');
console.log('Panel content (last 200 chars):');
console.log(JSON.stringify(panelContent.substring(panelContent.length - 200)));