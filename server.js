const path = require("path");
const express = require("express");
const router = require("./router");
const app = express(); // create express app
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.use('/api', router);
// // add middlewares
app.use(express.static(path.join(__dirname, "build")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start express server on port 5000
app.listen(port = process.env.PORT || 5000, () => {
  console.log("server started on port "+ port);
});
