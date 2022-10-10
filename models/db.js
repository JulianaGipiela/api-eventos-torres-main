const Sequelize = require('sequelize');
const sequelize = new Sequelize('gerenciador', 'admin', 'torreroot', {
  host: 'torre.cchvrdqldqr3.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() =>{
    console.log("Conexão realizada com sucesso!");
}).catch(() => {
    console.log("Erro: Conexão não realizada com sucesso!");
});

module.exports = sequelize;