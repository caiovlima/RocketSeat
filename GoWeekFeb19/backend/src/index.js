//index.js é nosso core da aplicação
//todas lib que forem usar tem que importar aqui
//express o routes.js vai precisar
const express = require('express');
//mongoose os models vão precisar 
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    'mongodb://localhost:27017/goweek',
     { useNewUrlParser: true}
);

app.use(cors());
app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log("Server start on port 3000");
});
