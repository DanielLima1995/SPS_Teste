const ModelUsuario = require('../models/usuario.model')
const jwt = require('jsonwebtoken')
const jwtConfig = require('../../config/jwt')

function login(req, res) {
  //return req.body
  try {    
      const usuarioBD = ModelUsuario.buscaUsuarioCadastrado(req.body)

      //return res.json({ usuarioBD }) OK
    if (!usuarioBD || usuarioBD.password !== req.body.password) {//validar int / str
      throw new Error('Credenciais inválidas')
    }

    const token = jwt.sign(
      { id: usuarioBD.id, usuario: usuarioBD.name, type: usuarioBD?.type },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn }
    )

    return res.json({ token: token, usuarioInfo: { id: usuarioBD.id, name: usuarioBD.name, email: usuarioBD.email, type: usuarioBD?.type } })
  } catch (error) {
    return res.status(401).json({ error: error.message })
  }
}

module.exports = {
  login
}
