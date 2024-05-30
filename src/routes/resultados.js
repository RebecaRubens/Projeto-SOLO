const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'becajuba1605',
  database: 'OdisseiaInbox'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

router.post('/registrar-resultado', (req, res) => {
  const { vencedor, fk_jogo } = req.body;

  const query = 'INSERT INTO resultados (vencedor, fk_jogo) VALUES (?, ?)';
  connection.query(query, [vencedor, fk_jogo], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ message: 'Resultado registrado com sucesso!' });
  });
});

module.exports = router;