# SPS – Sistema de Projeto (Front + API)

Este repositório contém uma aplicação full stack, composta por:

    Front-end em React

    Back-end (API) em Node.js com autenticação JWT

Cada parte do projeto está organizada em sua respectiva pasta (front e api).

# Estrutura do projeto

├── front/      # Aplicação React (interface)
├── api/        # API Node.js (backend)
└── README.md   # Documentação geral do projeto

# Tecnologias utilizadas
Front-end

    React

    React Router DOM

    React Bootstrap

    Axios

Back-end

    Node.js

    Express

    JWT (autenticação)

    Banco de dados em memória com persistência em arquivo JSON

# Pré-requisitos gerais

Node.js (recomendado: 16+ para o front e 18+ para a API)

npm

# Configuração Env Front

Crie um arquivo .env dentro da pasta front:
    front/.env

Conteúdo:
    REACT_APP_SERVER_URL=http://localhost:3001
    REACT_APP_API_URL=http://localhost:3000


# Configuração Env Back

Crie um arquivo .env dentro da pasta api:
    api/.env

Conteúdo:
    PORT=3000
    JWT_SECRET=projeto_SPS

# Como rodar o projeto completo

Clonar o repositório
    git clone git@github.com:DanielLima1995/SPS_Teste.git

Subir a API (backend)
    cd api
    npm install
    npm run dev

A API estará disponível em:
    http://localhost:3000

Configurar e subir o Front-end:
    cd ../front
    npm install
