//const fs = require('fs');
// const fs = require(node:'fs');
// const data = fs.readFileSync("./data.txt");
//const data = fs.readFileSync("./data.txt", "utf-8");  //here data is encoded and is represented in string format
//console.log(data);           //in buffer format
//console.log(data.toString());  //in string format
//fs.writeFileSync("./data1.txt","Hey this is my new work","utf-8");
//fs.appendFileSync("./data1.txt"," Work from another file","utf-8");
//fs.writeFileSync("./data3.txt","Hey this is my new work","utf-8");
//fs.renameSync("./data3.txt", "./data5.txt");
//fs.unlinkSync("./data5.txt");    //for deletion

const fs = require('fs');
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);

if(data.match("H")){
    console.log("H is found");
    const newdata=data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata, "utf-8");
}
