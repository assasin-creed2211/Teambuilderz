const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'server.js');
const content = fs.readFileSync(filePath, 'utf8');
let braceStack = [];
let parenStack = [];
let line = 1;
let col = 1;

for (let i = 0; i < content.length; i++) {
  const char = content[i];
  if (char === '\n') { line++; col = 1; } else { col++; }

  if (char === '{') braceStack.push({ line, col });
  else if (char === '}') braceStack.pop();
  else if (char === '(') parenStack.push({ line, col });
  else if (char === ')') parenStack.pop();
}

console.log('Unclosed Braces at:');
braceStack.forEach(b => console.log(`Line ${b.line}, Col ${b.col}`));
console.log('Unclosed Parens at:');
parenStack.forEach(p => console.log(`Line ${p.line}, Col ${p.col}`));
