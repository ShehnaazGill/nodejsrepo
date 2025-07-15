////// CRUD WITH FILE SYSTEM
const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname , 'crud');
const filePath = `${dirPath}/index.txt`

// Make File

fs.writeFileSync(filePath , "This is a simple text files using path module")

// Read File

fs.readFile(filePath , 'utf8' , (err , item) => {
    console.log(item);
})

// Update (Append) File

fs.appendFile(filePath, ' and append file fot upfdation.' , (err) => {
    if(!err){
        console.log("File Is Updated");
    }
})

// Rename File

fs.rename(filePath , `${dirPath}/rename.txt` , (err) => {
    if(!err){
        console.log("File Renamed!");
    }
})

// Delete File

// fs.unlinkSync(`${dirPath}/rename.txt`)