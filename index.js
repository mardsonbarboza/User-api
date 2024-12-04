const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger'); // Importar o arquivo de configuração
//rota
const bodyParser = require('body-parser');
require('dotenv').config();

const UserRouter = require('./Routers/UserRouter'); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.use('/api',UserRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(8080,()=>{
    console.log("Serve devidamente conectado");
    console.log('Acesse a documentação em http://localhost:8080/api-docs');
})