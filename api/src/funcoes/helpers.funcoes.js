
function autoIncrement(data) { //função simula auto increment
  if (data.length === 0) return 1
  return Math.max(...data.map(u => u.id)) + 1
}

module.exports = {
  autoIncrement
}