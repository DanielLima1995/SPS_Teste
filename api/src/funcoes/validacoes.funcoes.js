function validarCamposAusentes(body, colunas) {
  return Object.keys(colunas).filter(campo => !body.hasOwnProperty(campo) && colunas[campo].required)
}

function camposInvalidos(body, colunas){
  return Object.keys(colunas).filter(campo => colunas[campo].required && body[campo] == '')
}

function validaTipoDado(body, colunas){
  return Object.keys(colunas).filter(campo => body.hasOwnProperty(campo) && typeof body[campo] !== colunas[campo].type)
}

function campoEditavel(body, colunas){
  return Object.keys(body).filter(campo => !colunas[campo].editable)
}

module.exports = {
  validarCamposAusentes,
  camposInvalidos,
  validaTipoDado,
  campoEditavel
}
    
