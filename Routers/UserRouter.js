/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do usuário
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           format: email
 *           description: Email do usuário
 *         password:
 *           type: string
 *           description: Senha do usuario  
 *       example:
 *         id: 1
 *         name: João Silva
 *         email: joao.silva@email.com
 *         password: 123456
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     description: Endpoint para listar todos os usuários cadastrados.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cria um novo usuário
 *     description: Endpoint para criar um novo usuário com nome e email.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: Ana Costa
 *             email: ana.costa@email.com
 *             password: 123456
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     description: Endpoint para excluir um usuário com base no ID fornecido como parâmetro.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único do usuário a ser deletado
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Atualiza informações do usuário
 *     description: Endpoint para atualizar o nome e a senha de um usuário com base no ID fornecido na URL.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome atualizado do usuário
 *               email:
 *                 type: String
 *                 description: Email atualizado do usuario
 *               password:
 *                 type: string
 *                 description: Senha atualizada do usuário
 *             example:
 *               name: Maria Silva
 *               email: test@email.com
 *               password: novaSenha123
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Dados inválidos ou incompletos
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

const express = require('express');
const router = express.Router();
const UserController = require('../Controller/userController');

router.get('/users', UserController.findUsers);
router.post('/user', UserController.newUser);
router.delete('/user/:id', UserController.delete);
router.put('/user/:id',UserController.uptdateUser);
module.exports = router;
