const http = require('http');
const fs = require('fs');

const port = 3000;

const requestHandler = (request, response) => {
  const { headers } = request;
  const contentType = headers['content-type'] ? headers['content-type'].toUpperCase() : null;

  if (request.method === 'POST' && contentType === 'APPLICATION/JSON') {
    const file = fs.createWriteStream('./log.txt', { 'flags': 'a' });
    file.on('pipe', () => {
      const date = new Date();
      file.write(`[${date}]\n`)
    })
    request
      .on('end', () => {
        file.end(`\r\n`);
        response.end('ok');
      })
      .pipe(file)
  } else {
    response.statusCode = 404;
    response.end();
  }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log(`Unable to start server: ${err}`)
  }
  console.log(`Server is listening on ${port}`);
});
