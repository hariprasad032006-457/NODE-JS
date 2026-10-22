const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample2.txt");

try {
  fs.writeFileSync(filePath, "Practising Node.js synchronous file handling.");
  const data = fs.readFileSync(filePath, "utf8");
  console.log("File contents:", data);
} catch (error) {
  console.error("File operation failed:", error.message);
}
