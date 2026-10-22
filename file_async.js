const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");

fs.writeFile(filePath, "Practising Node.js asynchronous file handling.", (writeError) => {
  if (writeError) {
    console.error("Could not write file:", writeError.message);
    return;
  }

  console.log("File written successfully.");

  fs.readFile(filePath, "utf8", (readError, data) => {
    if (readError) {
      console.error("Could not read file:", readError.message);
      return;
    }

    console.log("File contents:", data);
  });
});
