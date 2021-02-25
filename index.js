const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// http://localhost:3000/taikaviitta
app.get("/taikaviitta", (req, res) => {
  res.send("muutos  sddssdsd");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
