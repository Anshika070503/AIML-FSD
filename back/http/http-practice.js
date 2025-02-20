const http = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async(req,res)=>{
     res.writeHead(200,{ "Content-Type" : "text/html"});
     const response = await axios.get("https://api.github.com/users");
    const usersdata = response.data;
    let frontdata = `<html><head></head><body>`
    usersdata.forEach((user) =>{
        frontdata += `<div><img src = "${user.avatar_url}}"></img></div>`
    });
    frontdata += `</body></html>`
    res.end(frontdata);
});

