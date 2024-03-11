const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;


const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost`)
  const message = url.searchParams.get('message')
  res.setHeader('Content-Type', 'text/plain')

  if (!message) {
    res.statusCode = 400
    return res.end('Need strng in message param GET-query')    
  }
  
  res.statusCode = 200
  res.end(message)
});


server.listen(port, hostname, () => {
  console.log(`Server running at port ${port}`);
});
