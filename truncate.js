// Run once to trim index.html at </html> (removes any trailing junk), then delete this file.
const fs = require('fs');
const path = require('path');
const htmlPath = path.join(__dirname, 'index.html');
let s = fs.readFileSync(htmlPath, 'utf8');
const idx = s.indexOf('</html>');
if (idx !== -1) {
  fs.writeFileSync(htmlPath, s.substring(0, idx + 7), 'utf8');
  console.log('Trimmed index.html at </html>.');
} else {
  console.log('No </html> found.');
}
