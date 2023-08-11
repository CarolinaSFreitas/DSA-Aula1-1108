import express from 'express';
import { sequelize } from './database/conecta.js';
import { Produto } from './models/Produto.js';
import routes from './routes.js';

const app = express()
const port = 3000

app.use(routes)

async function conecta_db(){
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        await Produto.sync();
        console.log("Tabela Produto Sincronizada.")
      } catch (error) {
        console.error('Erro na conexão com o banco de dados.', error);
      }
}
conecta_db()


app.get('/', (req, res) => {
  res.send('Primeira aula de Desenvolvimento de Serviços e APIs.')
})

app.get('/dia', (req, res) => {
    res.send('Aula nas Sextas, na Sala 205!')
  })

app.get('/carol', (req, res) => {
    res.send('Eu sou a Carolina :)')
  })

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})

