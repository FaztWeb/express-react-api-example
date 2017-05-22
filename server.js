const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const users = [
  {
    "nombre": "Fabian"
  },
  {
    "nombre": "Pedro"
  },
  {
    "nombre": "Maria"
  }
];

app.get('/api/users', (req, res) => {
  res.json({
    users: users
  })
});

app.listen(3000, function () {
  console.log('server on port 3000');
});
