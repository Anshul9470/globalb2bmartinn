const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\Admin\\Downloads\\globalb2bmartinn-main\\globalb2bmartinn-main\\globalb2bmartinn-main\\src\\Pages\\FreeDash.jsx', 'utf8');

let braceCount = 0;
let divCount = 0;
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;
    const openDivs = (line.match(/<div/g) || []).length;
    const closeDivs = (line.match(/<\/div>/g) || []).length;

    braceCount += openBraces - closeBraces;
    divCount += openDivs - closeDivs;

    if (braceCount < 0 || divCount < 0) {
        console.log(`Error at line ${i + 1}: Braces: ${braceCount}, Divs: ${divCount}`);
        // Reset to prevent spamming
        if (braceCount < 0) braceCount = 0;
        if (divCount < 0) divCount = 0;
    }
}

console.log('Final Braces:', braceCount);
console.log('Final Divs:', divCount);
