const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.send("Hola desde el index");
})

module.exports = route();
