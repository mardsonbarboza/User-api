# API de Gerenciamento de Usuários

Esta API é uma implementação simples de gerenciamento de usuários utilizando Node.js, Express e Knex para interagir com um banco de dados SQL.

## Funcionalidades

A API oferece as seguintes funcionalidades para gerenciamento de usuários:

### 1. **Listar Todos os Usuários**
- **Método:** `GET /users`
- **Descrição:** Retorna todos os usuários cadastrados no banco de dados.
- **Resposta:**
  - **200 OK**: Lista de usuários retornada com sucesso.
  - **500 Internal Server Error**: Erro interno do servidor.
- #### Exemplo de Resposta:
```json
[
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao.silva@email.com",
    "password": "123465"
  },
  {
    "id": 2,
    "name": "Maria Oliveira",
    "email": "maria.oliveira@email.com",
    "password": "321654"
  }
]

```
### 2. **Criar Novo Usuário**
- **Método:** `POST /user`
- **Descrição:** Cria usuario.
- **Resposta:**
  - **201 OK**: Usuário criado com sucesso.
  - **400**: Dados inválidos.
  - **500**: Erro interno do servidor.
- #### Exemplo de value:
```json
{
  "name": "Ana Costa",
  "email": "ana.costa@email.com",
  "password": 123456
}
```
### 3. *Excluir novo usuário**
- **Método:** `DELETE /user/:id`
- **Descrição:** Excluir usuário.
- **Resposta:**
  - **200**: Usuário deletado com sucesso
  - **404**: Usuário não encontrado
  - **500**: Erro interno do servidor

### 4. *Atualizar usuário**
- **Método:** `UPDATE /user/:id`
- **Descrição:** Atualização de usuário.
- **Resposta:**
  - **200**: Usuário atualizado com sucesso
  - **400**: Dados inválidos ou incompletos
  - **404**: Usuário não encontrado
  - **500**: Erro interno do servidor
  - #### Exemplo de value:
```json
{
  "name": "Ana Costa",
  "email": "ana.costa@email.com",
  "password": 123456
}
```
## Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado em sua maquina
- Banco de dados configurado sendo MySQL
### Passos
1. Clone o repositório:
```bash
git clone https://github.com/mardsonbarboza/User-api.git
```
2. Acesse o diretório do projeto:
```
cd User-api
```
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor
```bash
npx nodemon
```
A API esta diponivel na porta 8080. Você pode acessar os endpoinst em http://localhost:8080/api

## Documentação da API
A documentação da API está disponível via Swagger UI, onde você pode visualizar e testar as rotas diretamente. Se você estiver rodando o servidor localmente na porta 8080, acesse a documentação pelo seguinte link:
```
http://localhost:8080/api-docs

```
## Tecnologias Utilizadas
- Node.js
- Express
- Knex.js
- Swagger
- MySQL2

  
