const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\Admin\\Downloads\\globalb2bmartinn-main\\globalb2bmartinn-main\\globalb2bmartinn-main\\src\\Pages\\FreeDash.jsx', 'utf8');

function count(str, sub) {
    let count = 0;
    let pos = 0;
    while ((pos = str.indexOf(sub, pos)) !== -1) {
        count++;
        pos += sub.length;
    }
    return count;
}

console.log('Divs:', count(content, '<div') - count(content, '</div>'));
console.log('Sections:', count(content, '<section') - count(content, '</section>'));
console.log('Braces:', count(content, '{') - count(content, '}'));
