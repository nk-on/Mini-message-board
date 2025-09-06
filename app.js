const express = require("express");
const app = express();
const path = require("node:path");
const port = process.env.PORT || 8000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
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
