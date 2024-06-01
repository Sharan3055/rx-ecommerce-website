const http = require("http");

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url == "/test" && req.method == "POST") {
    console.log("ok..........");
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunks", chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString().split("=");
      // console.log(body);
      console.log("parsed: ", parsedBody);
    });
    // Send the response body "Hello World"
    res.end("Hello World\n");
  }
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
