const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end("Deu green");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

function disc(){
  let w = document.getElementById("word")
  w.innerHTML="Esse é meu curriculo, para contato cel:(11)999149848"
}

function some(){
  let a = document.getElementById("foto")
  $(a).fadeOut("500000000");
}


