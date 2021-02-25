const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
// test
app.use(express.static("public"));

// http://localhost:3000/taikaviitta
app.get("/taikaviitta", (req, res) => {
  res.send("muutos  sddssdsd");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
