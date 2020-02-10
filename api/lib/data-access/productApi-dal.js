const mysql = require('mysql')
const secrets = require('../../secrets.json')
const errorHandler = require('../errorHandler')

const getConnection = () => {
  const {
    dbUserName: user,
    dbPassWord: password,
    mysqlDbName: database,
    dbHost: host
  } = secrets
  const connection = mysql.createConnection({
    host,
    user,
    database,
    password
  })
  connection.connect()
  return connection
}

const productsDal = module.exports = {}

/**
 * returns all products
 */
productsDal.getProducts = function (id) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * from products' + (id ? ` where id=${id}` : '')
    const db = getConnection()
    db.query(query, (err, res) => {
      db.end()
      if (err) {
        console.log(err)
        const errMsg = errorHandler.INTERNALSEVERERROR
        errMsg.errorMsg += err.toString()
        return reject(errMsg)
      }
      if (!res[0]) {
        return reject(errorHandler.USERNOTAVAILABLE)
      }
      return resolve(res)
    })
  })
}

productsDal.updateProduct = function(id, obj) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE products SET name='${obj.name}', description='${obj.description}',
      services= ? WHERE id=${id}`
    const db = getConnection()
    db.query(query, [obj.services], (err, res) => {
      db.end()
      if (err) {
        console.log(err)
        const errMsg = errorHandler.INTERNALSEVERERROR
        errMsg.errorMsg += err.toString()
        return reject(errMsg)
      }
      return resolve(res)
    })
  })
}
