import http from "http";
import fs from "fs";

const app = http.createServer((request, response) => {
  let url = request.url;
  if (request.url === "/") {
    url = "/src/view/index.html";
  }

  if (request.url === "/favicon.ico") return response.writeHead(404);

  response.writeHead(200);
  response.end(fs.readFileSync(process.cwd() + url));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
