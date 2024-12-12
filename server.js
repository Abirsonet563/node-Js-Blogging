const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set Header Content type
  res.setHeader('Content-Type', 'text/html');

 let path = "./view/"
 if(req.url === "/"){
  path += "index.html"
 }else if (req.url === "/about"){
  path += "about.html"
 }else{
  path += "404.html"
 }

 fs.readFile(path, (err, data) => {
  if(err){
    console.log(err);
    res.end();
  }else{
    res.end(data);
  }
 })
});

server.listen(3000, 'localhost', ()=> {
    console.log("server.listening")
});