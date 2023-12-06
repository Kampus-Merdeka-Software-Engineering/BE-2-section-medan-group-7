const http = require('http')
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) =>{
  if (request.url === "/" && request.method ==='GET') {
    response.end("ichiikiwir")
  }
  if (request.url === "/" && request.method ==='POST') {
    response.end("ichiikiwir ngepost")
  }
  if (request.url === "/login") {
    response.end("iini login")
  } else{
    response.end("404 Error")
  }
})

server.listen(port, () => {
  console.log('Server jalan di port', port, 'coy')
})