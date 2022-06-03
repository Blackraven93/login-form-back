import http from "http";
import fs from "fs";

const app = http.createServer((request, response) => {
  let _url = request.url;
  console.log(_url);
  if (_url === "/") {
    _url = "/src/view/index.html";
    response.writeHead(200);
    response.end(fs.readFileSync(process.cwd() + _url));
    return;
  }

  if (_url === "/favicon.ico") {
    response.writeHead(404);
    return;
  }

  response.writeHead(200);

  const { host } = request.headers;
  const URLClass = new URL(`http://${host}${_url}`);
  const name = URLClass.searchParams.get("name");
  const template = `<h1>bye bye~!!!!! ${name}</h1>`;
  response.end(template);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
