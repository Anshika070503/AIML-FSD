const http = require('http');
const axios = require('axios');
const port = 3009;
const server = http.createServer(async(req,res)=>{
    console.log("Hello from the server!");
    //res.writeHead(200,{ "Content-Type" : "text/plain"});
    res.writeHead(200,{ "Content-Type" : "text/html"});
    //fetch => return data in the form of promise
    // const response = await fetch("https://dummyjson.com/products");
    // const data = await response.json();
    //res.end('Welcome to the server!');
    //res.end(JSON.stringify(data));

    const response = await axios.get("https://dummyjson.com/products");
    const productsdata = response.data.products;
    let frontdata = `<html><head></head><body>`
    productsdata.forEach((product) =>{
        frontdata += `<div><img src = "${product.thumbnail}"></img></div>`
    });
    frontdata += `</body></html>`
    //res.end(JSON.stringify(productsdata));
    res.end(frontdata);
});

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});