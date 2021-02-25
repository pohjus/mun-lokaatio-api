const express = require("express");
const app = express();
const locationsrouter = express.Router();
const port = process.env.PORT || 8080;
const path = require("path");
locationsrouter.get("/mikkihiiri", (req, res) => {
  res.send("router");
});
app.use("/akuankka", locationsrouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
