// const { Socket } = require('dgram');
const http = require('http');
// const { json } = require('stream/consumers');

// const server = http.createServer((req,res));

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('listening to port...');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.on('connection', (Socket) => {
    console.log('New Connection...');
});


server.listen(3000);

console.log('listening on port 3000...');