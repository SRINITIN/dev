const http = require('http');
 http.createServer(
    (req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({name:"Nitin", email:"ntm@gk.com", contact:"8789256"}));
        res.end();
    }
 ).listen(3118);