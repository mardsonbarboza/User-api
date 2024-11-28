const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gerenciamento de Usuários',
            version: '1.0.0',
            description: 'gerenciamento de api de usuarios basicos',
            servers: [
                {
                    url: 'http://localhost:8080',
                },
            ],
        },
    },
    apis: ['./Routers/*.js'], // Define os arquivos onde estão as anotações Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
