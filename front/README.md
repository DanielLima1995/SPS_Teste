## Pré-requisitos

- Node.js (recomendado: versão 16 ou superior)
- npm (geralmente instalado junto com o Node.js)

## Instalação

1. Clone o repositório ou baixe o código-fonte.
2. No terminal, acesse a pasta do projeto:
   ```bash
   cd front
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

Crie um arquivo `.env` na raiz do projeto e defina a URL da API backend:

```
REACT_APP_SERVER_URL=http://localhost:3001
REACT_APP_API_URL=http://localhost:3000
```

Ajuste a URL conforme o endereço do seu backend.

## Execução

Para rodar o projeto em modo de desenvolvimento:

```bash
npm start
```

O app estará disponível em [http://localhost:3001](http://localhost:3001) (ou outra porta, conforme configuração).

## Scripts disponíveis

- `npm start` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a versão de produção
- `npm test` — Executa os testes

## Tecnologias principais

- React
- React Router DOM
- React Bootstrap
- Axios

## Observações

- Certifique-se de que o backend esteja rodando e acessível pela URL configurada.
- Para dúvidas ou problemas, consulte o código ou abra uma issue.
