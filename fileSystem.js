const fs = require("fs");
const Buffer = require("buffer");

// Reading file
fs.readFile("./input.txt", (err, data) => {
  if (err) console.log(err);

  console.log(data.toString());
});

// Writing file
fs.writeFile("./output.txt", "Why Maya?", () => {
  console.log("File was written.");
});

// Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);

    console.log("Folder created.");
  });
} else {
  fs.rmdir("./assets", () => {
    console.log("Folder removed.");
  });
}

// Deleting files
if (fs.existsSync("./deleteme.txt")) {
  fs.unlink("./deleteme.txt", () => {
    console.log("File was deleted.");
  });
}

// Own playground
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);

    console.log("Directory created");

    fs.writeFile("./assets/text.txt", "Siker", (err) => {
      if (err) console.log(err);

      console.log("File written.");
    });
  });
} else {
  console.log("This directory exists.");

  fs.unlink("./assets/text.txt", () => {
    console.log("File deleted.");
  });

  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);

    console.log("Directory deleted.");
  });
}
