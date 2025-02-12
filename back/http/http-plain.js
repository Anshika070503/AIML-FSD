const http = require('http')
const fs = require('fs/promises');
const server = http.createServer(async (req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("Hello, world!");
    const data = await fs.readFile("./home.html","utf-8");
    res.end(data); 
}); 

const port = 3001;
//when port is defined
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// //whenever port is not defibed
// server.listen(() => {
//     const a = server.address();
//     console.log(`Server is running on port ${a.port}`);
// });


