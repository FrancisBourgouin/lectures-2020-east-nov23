const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.get("/api/private", (req, res) => {
  if (req.session.userId) {
    res.json({ err: null, data: "This is private! Don't share" })
  } else {
    res.json({ err: "Not authenticated", data: null })
  }
})

app.post("/api/login", (req, res) => {
  req.session.userId = 42
  res.json({ id: 42, name: "Mister Potato Master" })
})

app.post("/api/logout", (req, res) => {
  delete req.session.userId
  res.send("Ok")
})

app.post("/api/authenticate", (req, res) => {
  if (req.session.userId) {
    res.json({ id: 42, name: "Mister Potato Master" })
  } else {
    res.json({ err: "Not authenticated", data: null })
  }
})


module.exports = app;
