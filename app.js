const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log('/')
  return res.status(200).send('/');
})

app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
})