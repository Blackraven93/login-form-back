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

  // readFile
  const text = fs.readFile(
    process.cwd() + `/src/view/${name}.txt`,
    "utf8",
    (err, description) => {
      const template = `
      <!DOCTYPE html>
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          <h1>${name}</h1>
          <p>${description}</p>
        </body>
      </html>
      `;

      response.end(template);
    }
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
