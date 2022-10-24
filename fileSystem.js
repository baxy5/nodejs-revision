const fs = require("fs");

// Reading file
fs.readFile("./input.txt", (err, data) => {
  if (err) console.log(err);

  console.log(data.toString());
});
