const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());

//converte json em formato entendível para o js
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
