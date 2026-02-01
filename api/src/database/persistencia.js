const fs = require('fs');
const path = require('path');
const dbPath = path.resolve(__dirname, 'memory.json');

function salvarUsuarios(usuarios) {
  fs.writeFileSync(dbPath, JSON.stringify({ usuarios }, null, 2), 'utf-8');
}

function carregarUsuarios() {
  if (fs.existsSync(dbPath)) {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data).usuarios || [];
  }
  return null;
}

module.exports = {
  salvarUsuarios,
  carregarUsuarios
};
