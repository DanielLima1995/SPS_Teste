

const db = require('../../database/memory')
const persistencia = require('../../database/persistencia')
const helpers = require('../../funcoes/helpers.funcoes')

const usuariosPersistidos = persistencia.carregarUsuarios()
if (usuariosPersistidos) {
  db.usuarios.length = 0
  db.usuarios.push(...usuariosPersistidos)
}

function index() {
  return db.usuarios
}

function store(novoUsuario) {
  novoUsuario.id = helpers.autoIncrement(db.usuarios)
  db.usuarios.push(novoUsuario)
  persistencia.salvarUsuarios(db.usuarios)
  return novoUsuario
}

function show(id) {
  return db.usuarios.find(u => u.id == id)
}
function update(usuario, dadosAtualizados) {
    Object.assign(usuario, dadosAtualizados)
    persistencia.salvarUsuarios(db.usuarios)
    return usuario
}

function buscaUsuarioCadastrado(body) {
  return db.usuarios.find(u => u.email == body.email)
}

function destroy(usuario) {
  const index = db.usuarios.indexOf(usuario)
  if (index > -1) {
    db.usuarios.splice(index, 1)
    persistencia.salvarUsuarios(db.usuarios)
    return true
  }
}

module.exports = {
  index,
  store,
  show,
  update,
  buscaUsuarioCadastrado,
  destroy
}
