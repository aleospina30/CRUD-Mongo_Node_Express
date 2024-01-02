import express from "express";

const app = express();

app.length("/", (req, res) => {
  res.send("Hola Pispirispis");
});

app.listen(8787);
console.log("Server on port", 8787);
