const express = require('express');
const mysql = require ('mysql2');
const path = require('path');
require('dotenv').config({path:'meuBanco.env'}); //lê seu env real

const app = express ();
const port = process.env.PORT || 3000;



// Serve arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../front-end')));
app.use(express.json()); // para receber JSON do frontend


// Conexão MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

//Testa a conexão
connection.connect(err => {
  if(err) console.log('Erro na conexão:', err);
  else console.log('Conectado ao MySQL!');
});


//Rota para retornar todas as transações
app.get('/api/transactions', (req,res)=> {
    connection.query('SELECT * FROM transactions', (err,results)=>{
        if(err)return res.status(500).json({error: err});
        res.json(results);
    });
});

app.post('/api/transactions', (req, res) => {
  const { kind, amount, entry_date } = req.body;

  if(!kind || !amount || !entry_date) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const sql = 'INSERT INTO transactions (kind, amount, entry_date) VALUES (?, ?, ?)';
  connection.query(sql, [kind, amount, entry_date], (err, result) => {
    if(err) return res.status(500).json({ error: err });
    res.json({ message: 'Transação adicionada com sucesso!', id: result.insertId });
  });
});


//Iniciar o servidor
app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});

