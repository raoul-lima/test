const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;
//const isAuth = require('./utils/isAuth');

const server = express();

//body-perser configuration
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

//configuration routes
server.get('/', (req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send("server en marche");
});

server.use('/api/',apiRouter);

server.listen(4040, function(){
    console.log('server demarré');
});