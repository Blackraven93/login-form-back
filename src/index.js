import http from "http";
import fs, { readFileSync } from "fs";

const app = http.createServer((request, response) => {
  let _url = request.url;

  if (_url === "/") {
    _url = "/src/view/index.html";
    const URLClass = new URL("http://localhost:3000/?name=raven");
    const name = URLClass.searchParams.get("name");
    const template = `<h1>bye bye~!!!!! ${name}</h1>`;
    response.end(template);
    return;
  }

  if (_url === "/favicon.ico") return response.writeHead(404);

  response.writeHead(200);
  console.log(process.cwd());
  console.log(__dirname);
  response.end(fs.readFileSync(process.cwd() + _url));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
