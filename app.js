const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/tony", (req, res) => {
  res.send("Hello, Tony!");
});

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
