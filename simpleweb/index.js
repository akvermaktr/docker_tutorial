const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi, there, buyer there');
});


app.listen(8080, () => {
  console.log('Loiten on port 80808');
});
