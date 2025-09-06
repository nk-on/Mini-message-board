const {messages} = require('../db.js')
function pushData(req,res) {
  const { messageName, messageText } = req.body;
  messages.push({ text: messageName, user: messageText, added: new Date() });
  return res.redirect("/");
}
module.exports = {pushData}