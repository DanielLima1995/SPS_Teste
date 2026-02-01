const jwt = require('jsonwebtoken')
const jwtConfig = require('../../config/jwt')

function auth(req, res, next) {
  const authorization = req.headers.authorization

  if (!authorization) {
    return res.status(401).json({ error: 'Token não informado' })
  }

  const token = authorization.split(' ')
  try {
    console.log('token[1]', token[1], jwtConfig, token)
    const decoded = jwt.verify(token[1], jwtConfig.secret)    
    req.user = decoded
    console.log('req.user', req.user)
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' })
  }
}

module.exports = auth
