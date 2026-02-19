import { guardianCheck } from "./contract/guardian.js";
import http from "http";

const server = http.createServer((req, res) => {

  if (req.method === "POST" && req.url === "/guardian") {

    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {

      try {
        const data = JSON.parse(body);
        const result = guardianCheck(data.wallet);

        res.writeHead(result.blocked ? 429 : 200, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify(result));

      } catch {
        res.writeHead(400);
        res.end("Invalid JSON");
      }

    });

  } else {
    res.writeHead(200);
    res.end("🛡 Intercom Guardian Running");
  }

});

server.listen(3000, () => {
  console.log("🛡 Guardian running on port 3000");
});