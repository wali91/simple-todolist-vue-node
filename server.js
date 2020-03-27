const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const tasks = require("./routes/task");
const port = 5000;

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", tasks);

app.listen(port, () => {
  console.log("server started on port " + port);
});
