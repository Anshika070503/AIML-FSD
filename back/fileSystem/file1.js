const fs = require('fs');
// const fs = require(node:'fs');
// const data = fs.readFileSync("./data.txt");
const data = fs.readFileSync("./data.txt", "utf-8");  //here data is encoded and is represented in string format
//console.log(data);           //in buffer format
console.log(data.toString());  //in string format

