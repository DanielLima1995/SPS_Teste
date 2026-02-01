const { Router } = require("express")
const authenticacaoController = require('../http/controllers/autenticacao.controller')
const usuarioController = require('../http/controllers/usuario.controller')
const auth = require('../http/middlewares/autenticacao.middleware')
const routes = Router()

const jwt = require("jsonwebtoken")

routes.post("/login", authenticacaoController.login)

routes.get("/info", (req, res) => {
  res.send(req.headers)
})

module.exports = routes

routes.get('/users', auth, usuarioController.index)
routes.post('/users', auth, usuarioController.store)
routes.get('/users/:id', auth, usuarioController.show)
routes.put('/users/:id', auth, usuarioController.update)
routes.delete('/users/:id', auth, usuarioController.destroy)
//