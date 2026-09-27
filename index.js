const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200,
            {
                "Content-Type": "text/plain"
            }
        );
        res.end("Welcome to JOB tracker API")
    }
})

server.listen(3000, () => {
    console.log("Server running onn 3000")
})