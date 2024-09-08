const express = require("express");
const routes =  require('./routes');

//cria um novo app usando express
const app = express();

//configura o express pra usar o padrao json de comunicaçao
app.use(express.json());
app.use(routes);

app.listen(3001);

