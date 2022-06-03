import http from "http";
import fs from "fs";

const app = http.createServer((request, response) => {
  let _url = request.url;
  console.log(_url);

  // const queryString = URLClass.queryString;
  // console.log(queryString);

  if (_url === "/") {
    _url = "/src/view/index.html";
    const URLClass = new URL("http://localhost:3000/?name=raven");
    console.log(URLClass.searchParams.get("name"));

    //MEMO: Legacy Code
    // const queryData = url.parse(_url, true).query;
    // console.log(queryData.id);
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
