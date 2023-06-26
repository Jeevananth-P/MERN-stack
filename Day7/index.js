const http = require('http');
const fs = require('fs');
const hostname = 'localhost'; //127.0.0.1
const port = 3001;

function read(filePath) {
return new Promise((resolve, reject) => {
fs.readFile(filePath, ((error, data) => {
  if(error) {
      reject("Failed");
  }else {
      resolve(data);
  }
}))
})
}

const requestListener = async (request, response) => {
try {
let data;
console.log(request.url);
switch(request.url) {
  case '/states': {
     data = await read(`${__dirname}/states.txt`);
     break;
  }
  case '/capital': {
      data = await read(`${__dirname}/capital.txt`);
      break;
  }
  default: {
      data = "Not found";
      break;
  }
}
response.setHeader("Content-Type", "application/json");
response.writeHead(200);
response.end(`
{
  "data": ${data.toString()}
}
`);
} catch (error) {
response.setHeader("Content-Type", "application/json");
response.writeHead(500);
response.end(`
{
 "error": ${error}
}
`);
}

}

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
console.log("Server is running")
})

//async await,http methods,promise,status call