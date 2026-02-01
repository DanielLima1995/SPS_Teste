import React, { useEffect, useState } from "react"
import UserService from "../services/UserService"
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = UserService.list()
      .then((data) => {
        setUsers(data)
      })
      .catch((error) => {
        alert("Erro ao buscar usuários: " + error.message)
      })
  }, [navigate])

  const removeUsuario = (userId) => {
    UserService.delete(userId).then(() => {
      setUsers(users.filter(user => user.id !== userId))
    }).catch((error) => {
      alert("Erro ao remover usuário: " + error.message)
    })  
  }

  return (
    <div>

        <Card className="mb-2 p-4">
          <Button variant="success" className="mb-3" style={{float: "right", width: "fit-content"}} onClick={() => navigate("/users/new")}>Cadastrar Usuário</Button>
          <Card.Header><h5>Lista de Usuários</h5></Card.Header>
          <Card.Body>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Email</th>
                  <th className="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.type}</td>
                    <td>{user.email}</td>
                    <td className="text-center d-flex justify-content-center">
                      <Button variant="primary" className="me-2" size="sm" onClick={() => navigate(`/users/${user.id}`)}>Editar</Button>{' '}
                      <Button variant="danger" size="sm" onClick={() =>removeUsuario(user.id)}>Remover</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Users
