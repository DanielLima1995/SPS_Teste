import React from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import UserService from "../services/UserService"
import Card from 'react-bootstrap/Card'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import helperFuncoes from "../funcoes/helper.funcoes";

export async function userLoader({ params }) {
  // Exemplo: buscar usuário pelo id da rota
  const user = await UserService.get(params.userId);
  return user;
}

function UserEdit() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    UserService.get(userId)
      .then((response) => {
        setName(response.name || "");
        setEmail(response.email || "");
        setSenha(response.password || "");
      })
      .catch((error) => {
        alert(helperFuncoes.error(error?.response?.data ?? error, "Erro ao carregar dados do usuário"))
      });
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = UserService.update(userId, { name, password }).then((data) => {
        alert("Usuário atualizado com sucesso!")
        setName("")
        setEmail("")
        setSenha("")

        setTimeout(() => {
          navigate("/users")
        }, 500)

      }).catch((error) => {
        alert(helperFuncoes.error(error?.response?.data ?? error, "Erro ao atualizar usuário"))
      })

    } catch (error) {
      alert(helperFuncoes.error(error?.response?.data ?? error, "Erro ao atualizar usuário"))
    }
  }

  const navigate = useNavigate()

 return (
    <div>

        <Card className="mb-2 p-4">
          <Button variant="success" className="mb-3" style={{float: "right", width: "fit-content"}} onClick={() => navigate("/users")}>Voltar</Button>
          <Card.Header><h5>Edição de Usuários</h5></Card.Header>
          <Card.Body>
            <Form className="content p-4" onSubmit={handleSubmit}>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicString">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do usuário"
                  value={name}
                  onChange={e => setName(e.target.value)}
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
          <Button variant="primary" className="mb-3" type="submit">Salvar</Button>
        </Form>
          </Card.Body>
        </Card>
    </div>
  )
}

export default UserEdit;


