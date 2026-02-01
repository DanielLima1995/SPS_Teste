# SPS API

API Node.js com autenticação JWT, banco de dados em memória com persistência em arquivo e rotas protegidas.

## Pré-requisitos
- Node.js 18+ instalado
- npm instalado

## Instalação
1. Clone o repositório ou copie os arquivos para sua máquina.
2. Instale as dependências:
   ```
   npm install
   ```

## Execução
- Para rodar em modo desenvolvimento (com nodemon):
  ```
  npm run dev
  ```
- Para rodar normalmente:
  ```
  npm start
  ```

A API estará disponível em: http://localhost:3000

#Configuração Env Back

Crie um arquivo .env dentro da pasta api: api/.env

PORT=3000 
JWT_SECRET=projeto_SPS

## Rotas principais
- `POST /login` — retorna um JWT ao autenticar com usuário e senha válidos.
- `GET /usuarios` — lista usuários (protegida, requer JWT).
- `POST /usuarios` — cria usuário (protegida, requer JWT).
- `GET /usuarios/:id` — busca usuário por id (protegida, requer JWT).
- `PUT /usuarios/:id` — atualiza usuário (protegida, requer JWT).
- `DELETE /usuarios/:id` — remove usuário (protegida, requer JWT).

## Autenticação
Inclua o token JWT no header das requisições protegidas:
```
Authorization: Bearer <seu_token>
```

## Persistência
Os dados dos usuários são salvos em `src/database/memory.json`.

## Observações
- O projeto utiliza um banco de dados em memória com persistência simples em arquivo JSON.
- Para redefinir os dados, apague ou edite o arquivo `src/database/memory.json`.
