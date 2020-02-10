const productDal = require('../data-access/productApi-dal')
const errorHandler = require('../errorHandler')
const fs = require('fs')
const path = require('path')

const validateExpiryDate = (obj) => {
  const planExpire = +new Date(obj.plan_expire)
  const currDate = new Date().setHours(0, 0, 0, 0)
  return planExpire < currDate ? errorHandler.PLANEXPIRED : 'success'
}

const productApi = module.exports = {}

/**
 * method will return list of all the products
 */
productApi.getUserDetails = function () {
  return productDal.getProducts()
}

productApi.getProduct = function (id) {
  return productDal.getProducts(id)
}

productApi.updateImages = async function(obj) {
  const {
    id,
    sname,
    deletedImages,
    newImages
  } = obj
  let pdoc = (await productDal.getProducts(id))[0]
  pdoc.services = JSON.parse(pdoc.services)
  pdoc.services = pdoc.services.map(i => {
    if (i.name === sname) {
      i.images = i.images.filter(img => !deletedImages.includes(img))
      newImages.forEach(img => {
        if (i.images.indexOf(img.name) === -1) {
          fs.writeFileSync(path.join(__dirname,`../../public/images/${img.name}`), img.data.split(',')[1], 'base64')
          i.images.push(img.name)
        }
      })
    }
    return i
  })
  pdoc.services = JSON.stringify(pdoc.services)
  await productDal.updateProduct(id, pdoc)
}

productApi.updateProduct = async function(obj) {
  const {
    id,
    pdoc
  } = obj
  console.log(pdoc)
  await productDal.updateProduct(id, pdoc)
}
