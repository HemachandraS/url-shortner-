const express = require("express");
const connect = require("./config/db");

const app = express();

// connect to database
connect();

app.use(express.json({ extended: false }));

// Define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

app.listen(5000, () => {
  console.log("listen 5000");
});
