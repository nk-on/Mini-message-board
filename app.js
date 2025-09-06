const express = require("express");
const app = express();
const path = require("node:path");
const port = process.env.PORT || 8000;
const messages = require('./db')
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.render("index", { title: "messages", messages });
});
app.get("/new", (req, res) => {
  return res.render("form");
});
app.post("/new", (req, res) => {
  const { messageName, messageText } = req.body;
  messages.push({ text:messageName, user:messageText, added: new Date() });
  return res.redirect('/')
});
app.listen(port, () => {
  console.log("i work");
});
