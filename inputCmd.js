// console.log(process.argv);
// console.log(process.argv[0]);

/////////////////////

// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2] , input[3])

///////////////////

// const fs = require('fs');
// const input = process.argv;

// if (input[2] === 'add') {
//     fs.writeFileSync(input[3], input[4]);
// } else if (input[2] === 'remove') {
//     fs.unlinkSync(input[3]);
// } else {
//     console.warn('Invalid Command');
// }

/////////////

// node inputCmd add hii.txt "Hii"  (ADD FILE WITH DATA)
// node inputCmd remove hii.txt "Hii" (REMOVE FILE)
// node inputCmd abc hii.txt "Hii" (INVALID FILE)

/////////////

const fs = require('fs');
const path = require('path');

// Current Directory
// const dirPath = path.join(__dirname);
// console.log(dirPath);

// Folder Directory
// const dirPathFile = path.join(__dirname , 'files');
// console.log(dirPathFile);

///////////////

// const dirPathFile = path.join(__dirname , 'files');
// for(i=0 ; i < 5 ; i++){
//     fs.writeFileSync(dirPathFile+ "/hello" + i + "txt" , "A simple txt file");
//     // fs.writeFileSync(`hello${i}.txt` , 'A simple txt file') // same as the above little differnce of syntax
// }

////////////

// GET FILES
// fs.readdir(dirPath , (err , files) => {
//     console.log(files);
// })

///////////

// const dirPath = path.join(__dirname);
// fs.readdir(dirPath , (err , files) => {
//     console.log(files);
// })

///////// GET FILES IN AN ARRAY

// const dirPathFile = path.join(__dirname , 'files');
// fs.readdir(dirPathFile , (err , files) => {
//     console.log(files);
// })

//////// GET SINGLE FILES WiTHOUT ARRAY

// const dirPathFile = path.join(__dirname , 'files');
// fs.readdir(dirPathFile , (err , files) => {
//     files.forEach((item) => {
//         console.log("This is " + item);
//     })
// })

