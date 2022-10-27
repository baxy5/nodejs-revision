const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("server listening on 3000");
});

app.get("/", (req, res) => {
  //res.send("<p>Hello</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send("<p>Hello about</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});
