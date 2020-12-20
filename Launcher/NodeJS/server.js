//deve-se instalar os plugins para o import
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());
//cors(aqui dentro eu defino quais domínios terão acesso a api)
app.use(cors());

//Iniciando o DB
moongose.connect(
    'mongodb://localhost:27017/nodeapi',
     { useNewUrlParser: true}
);

requireDir('.src/models');

//primeira rota
app.use('/api', require("./src/routes"));
//porta declarada para localhost
app.listen(3001);