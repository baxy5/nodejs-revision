const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("server listening on 3000");
});

// routing

app.get("/", (req, res) => {
  //res.send("<p>Hello</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send("<p>Hello about</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
