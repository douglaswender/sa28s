const fs = require("fs");

const readFile = (filePath)=>{
    console.log(filePath);
    return fs.readFileSync(filePath).toString();
};

const writeFile = (filePath, str) =>{
    fs.writeFile(filePath, str, (err)=>{
        if(err) return console.log(err);
    });

}

module.exports = {readFile, writeFile};