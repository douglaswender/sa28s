const fs = require("fs");

const fileContents = (filePath)=>{
    fs.readFileSync(filePath).toString();
};

export default fileContents;