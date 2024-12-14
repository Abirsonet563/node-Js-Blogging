const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// Install nodemon server to Run the Update the Server -- npm install -g nodemon
//If I Use Any Any Third Party Project, Always Use -- npm init

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //Geenrate Random Number Using lodash
  const num = _.random(0, 100);
  console.log(num);

  //once lodash Function
  const great = _.once(() => {
    console.log('Hi')
  })

  great();
  great();
  //set Header Content type
  res.setHeader('Content-Type', 'text/html');

 let path = "./view/"
 if(req.url === "/"){
  path += "index.html"
  res.statusCode = 200;

 }else if (req.url === "/about"){
  path += "about.html"
  res.statusCode = 200;

 }else if (req.url === "/about-me"){
  res.statusCode = "301";
  res.setHeader('Location', '/about');
  res.end();
 }else{
  path += "404.html"
  res.statusCode = 404;
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