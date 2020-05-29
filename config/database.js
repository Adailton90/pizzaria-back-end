require('dotenv').config()

module.exports = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  host: '127.0.0.1',
  dialect: 'mysql',
}
