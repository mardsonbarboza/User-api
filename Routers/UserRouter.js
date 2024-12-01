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
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           format: email
 *           description: Email do usuário
 *       example:
 *         id: 1
 *         nome: João Silva
 *         email: joao.silva@email.com
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
 *             nome: Ana Costa
 *             email: ana.costa@email.com
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

const express = require('express');
const router = express.Router();
const UserController = require('../Controller/userController');

router.get('/users', UserController.findUsers);
router.post('/user', UserController.newUser);
router.delete('/user/:id', UserController.delete);
module.exports = router;
