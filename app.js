const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res)=> (
  res.sendfile(path.join(__dirname + "/views/hola.html"))
)
);

app.listen(3000, () => (
  console.log("server running on port", 3000)
));