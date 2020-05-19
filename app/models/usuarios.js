module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  });
  return usuarios;
}