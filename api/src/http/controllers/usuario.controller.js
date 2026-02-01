const usuarioModel = require('../models/usuario.model')
const colunas = require('../../schema/usuario.schema')
const validacoes = require('../../funcoes/validacoes.funcoes')

const index = (req, res) => {
  res.json(usuarioModel.index())
}

const store = (req, res) => {
const body = req.body

  if(usuarioModel.buscaUsuarioCadastrado(body)) {
    return  res.status(409).json({ message: 'Usuário já cadastrado' })
  }

  const camposAusentes = validacoes.validarCamposAusentes(body, colunas)

  if (camposAusentes.length > 0) {
    console.log('camposAusentes', camposAusentes)
    return res.status(400).json({ message: 'Campos obrigatórios ausentes: ' + camposAusentes.join(', ') })
  }

  const camposInvalidos = validacoes.camposInvalidos(body, colunas)
  if (camposInvalidos.length > 0) {
    return res.status(400).json({ message: 'Campos inválidos no corpo da requisição: ' + camposInvalidos.join(', ') })
  }

  const tipoDadosInvalidos = validacoes.validaTipoDado(body, colunas)
  if (tipoDadosInvalidos.length > 0) {
    return res.status(400).json({ message: 'Tipo de dado inválido para um ou mais campos: ' + tipoDadosInvalidos.join(', ') })
  }

  req.body.type = 'usuario' //define tipo padrão

  const novoUsuario = usuarioModel.store(req.body)
  res.status(201).json(novoUsuario)
}

const show = (req, res) => {
  const usuario = usuarioModel.show(req.params.id)
  if (usuario) {
    res.json(usuario)
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' })
  }
}

const update = (req, res) => {
    const usuarioBD = usuarioModel.show(req.params.id)
  
    if (!usuarioBD) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    const camposInvalidos = validacoes.camposInvalidos(req.body, colunas)
    if (camposInvalidos.length > 0) {
        console.log('camposInvalidos', camposInvalidos)
      return res.status(400).json({ message: 'Campos inválidos no corpo da requisição: ' + camposInvalidos.join(', ') })
    }

    const tipoDadosInvalidos = validacoes.validaTipoDado(req.body, colunas)

    if (tipoDadosInvalidos.length > 0) {
      return res.status(400).json({ message: 'Tipo de dado inválido para um ou mais campos: ' + tipoDadosInvalidos.join(', ') })
    }

    const camposEditaveis = validacoes.campoEditavel(req.body, colunas)

    if (camposEditaveis.length > 0) {
        return res.status(400).json({ message: 'Os campo não são editáveis: ' + camposEditaveis.join(', ') })
    }

    const usuario = usuarioModel.update(req.params.id, req.body)

    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' })
    } 
}

const destroy = (req, res) => {
    const usuario = usuarioModel.show(req.params.id)

    if(usuario?.type && usuario.type === 'admin') {
        return res.status(403).json({ message: 'Usuário admin não pode ser deletado' })
    }

    if (usuario) {
        usuarioModel.destroy(usuario)
        res.status(204).send()
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' })
    }
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}
