const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'server.js');
const content = fs.readFileSync(filePath, 'utf8');
let braceCount = 0;
let parenCount = 0;
let bracketCount = 0;

for (let i = 0; i < content.length; i++) {
  const char = content[i];
  if (char === '{') braceCount++;
  else if (char === '}') braceCount--;
  else if (char === '(') parenCount++;
  else if (char === ')') parenCount--;
  else if (char === '[') bracketCount++;
  else if (char === ']') bracketCount--;
  
  if (braceCount < 0 ) { console.log(`Extra } found at char ${i}`); braceCount = 0; }
  if (parenCount < 0 ) { console.log(`Extra ) found at char ${i}`); parenCount = 0; }
  if (bracketCount < 0 ) { console.log(`Extra ] found at char ${i}`); bracketCount = 0; }
}

console.log(`Final counts: braces=${braceCount}, parens=${parenCount}, brackets=${bracketCount}`);
