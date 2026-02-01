module.exports = {
  secret: process.env.JWT_SECRET || 'projeto_SPS',
  expiresIn: '1h'
};
