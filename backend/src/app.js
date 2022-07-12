'use strict';
import ShirtController from './controllers/ShirtController';
import express from 'express';
import routes from './routes';
const app = express()
import db from './models/db';
import bodyParse from 'body-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
app.use(express.json());
app.use(routes);
app.use(cors());
const urlencodedParser = bodyParser.urlencoded({extended:false});



app.listen(3333, ()=> console.log('200'));   //porta 3000



routes.get('/shirt', ShirtController.list);
routes.get('/registershirts', function(req,res){
});

routes.post('/shirts', function(req, res){
  console.log(req.body);
  return res.send();
});

routes.get('/cadastrarcamisas', function(req, res){
  res.sendFile("C:/Users/phf-v/OneDrive/Área de Trabalho/Matérias/TrabalhoPI/frontend/registershirts.html" );

});