// Inicaializa o Express
const express = require('express');

// Instanciar o app
const app = express();

// Definir PORTA
const PORT = 3000;

function middleware(req, res, next){
    res.send('Olá, mundo!');
}

app.get('/', middleware);

app.listen(PORT, () => {
    console.log('Servidor foi iniciado na porta:', PORT);
})
