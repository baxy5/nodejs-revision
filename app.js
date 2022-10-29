const express = require("express");
const morgan = require("morgan");

const app = express();

app.listen(3000, () => {
  console.log("server listening on 3000");
});

app.set("view engine", "ejs");

// middleware and static files
app.use(morgan("dev"));
app.use(express.static("public"));

// routing

app.get("/", (req, res) => {
  //res.send("<p>Hello</p>");
  //res.sendFile("./views/index.html", { root: __dirname });

  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //res.send("<p>Hello about</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "about" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

/* // redirects

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
}); */

// 404

app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
