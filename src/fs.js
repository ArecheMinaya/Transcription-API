const fs = require("fs");

const fileName = "example.txt";
// Create a file
fs.writeFileSync(fileName, "Hello World");
console.log("File created");

// Read a file
const data = fs.readFileSync(fileName);
console.log(data.toString());

// Update a file
fs.appendFileSync(fileName, "\nHello Node.js");
console.log("File updated");

// Delete a file
fs.unlinkSync(fileName);
console.log("File deleted");
