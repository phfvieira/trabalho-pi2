const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('sportshirts', 'pablo', '759850', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

/* Teste para saber se a conexão funcionou
sequelize.authenticate()
.then(function(){
  console.log('acerto');

}).catch(function(){
  console.log("erro");
})
*/ 
module.exports = sequelize