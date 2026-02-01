import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../style/SignIn.css'
import { useNavigate } from 'react-router-dom'
import AuthService from "../services/AuthService"
import helperFuncoes from "../funcoes/helper.funcoes"

function Pages() {
   const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setSenha] = useState("")
  const [error, setError] = useState("")

  const formularioSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const response = await AuthService.login({ email, password })
      if (response.status !== 200) {
        throw new Error("Login falhou")
      }
      const data = response.data
      sessionStorage.setItem("token", data.token)
      sessionStorage.setItem("user", JSON.stringify(data.usuarioInfo))
      navigate("/users")
    } catch (err) {
      // Tenta pegar mensagem da API, senão pega mensagem padrão
      let msg = "Erro ao fazer login."
      alert(helperFuncoes.error(err.response.data, msg))
    }
  }

  return (
    <div className="w-100 vh-100 vw-100 d-flex justify-content-center align-items-center bg-light">
      <div className="bg-white dv-externa">
        <div className="header p-4 pb-0">
          <h5>Login</h5>
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <Form className="content p-4" onSubmit={formularioSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" className="mb-3" type="submit">Entrar</Button>
        </Form>
      </div>
    </div>
  )
}

export default Pages