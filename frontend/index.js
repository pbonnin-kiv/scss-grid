const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream(__dirname + '/public/index.html').pipe(res)
  }else if (req.url.match(/^\/css/)){
    fs.readFile(__dirname + '/public' + req.url, function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }else{
    res.writeHead(404);
    res.end(JSON.stringify({message:'Not found.'}));
  }
})

server.listen(process.env.PORT || 3000)