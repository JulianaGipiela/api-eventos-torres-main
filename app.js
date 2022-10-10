const serverless = require('serverless-http');
const express = require('express');
const app = express();
const Torre = require('./models/Torre');
const { response } = require('express');
const towers = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  if(req.headers["x-api-key"] == "b5rlIGZ6Ky1s34Xddjrx39HmrBZFVb2W9Yw0ZkIN") {
    next();
  } else {
    res.status(401).send("")
  }
});


app.get('/todasTorres', async(req, res) => {
  const eventos = await Torre.findAll({
    order: [['id', 'DESC']]
  });
  res.json(eventos);
});


app.get('/getTorre/:id', async(req, res) => {
 const torre = await Torre.findAll({
    where: {
      id: req.params.id
    }, 
    order: [['id', 'DESC']]
  });
  res.json(torre);
});

app.post('/postTorre', async(req, res) => {
  const { nome, longitude, latitude } = req.body;
  const tower = {nome, longitude, latitude}
  const resultadoCreate = await Torre.create({
    nome: tower.nome,
    longitude: tower.longitude,
    latitude: tower.latitude
  })
console.log(resultadoCreate);
  return res.json(tower);
 });


app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '2' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});
//para testar local deve ser colocado essa linha:
app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);