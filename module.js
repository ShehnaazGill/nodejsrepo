//////// Global Module

// console.log("Global Module");

//////// Non-Global Module

// const fs = require('fs');
// fs.writeFileSync("hello.txt", "Non Global Module"); // Create a .txt file
// console.log("File written successfully!");

///////////////

console.log("->>" , __dirname);
console.log("->>" , __filename);

/////// SHORTCUT

// const fs = require('fs').writeFileSync;
// fs("code.txt", "Non Global Module"); 

//////////////

// const test = require('fs').writeFileSync;
// test("code.txt", "Non Global Module"); 
