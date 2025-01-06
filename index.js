const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./dua_main.sqlite');

const express = require('express');
const app = express();

app.use(express.json());

app.get('/dua', (req, res) => {

    db.all('SELECT * FROM dua', [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
