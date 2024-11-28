/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     description: Este endpoint retorna uma lista com todos os usuários registrados no sistema.
 *     responses:
 *       200:
 *         description: Sucesso - Uma lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID único do usuário.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Nome do usuário.
 *                     example: João Silva
 *                   email:
 *                     type: string
 *                     description: Email do usuário.
 *                     example: joao.silva@example.com
 *       500:
 *         description: Erro interno no servidor.
 */
const express = require('express');
const router = express.Router();
const UserController = require('../Controller/userController');

router.get('/users',UserController.findUsers);


module.exports = router;