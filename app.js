const express = require("express");
const app = express();
const path = require("node:path");
const port = process.env.PORT || 8000;
const {messages} = require('./db');
const {pushData} = require('./controllers/pushData')
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.render("index", { title: "messages", messages });
});
app.get("/new", (req, res) => {
  return res.render("form");
});
app.post("/new",pushData);
app.listen(port, () => {
  console.log("i work");
});
