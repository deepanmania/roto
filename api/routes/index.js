const express = require('express')
const router = express.Router()
const productApi = require('../lib/services/productApi')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/getAllProducts', (req, res, next) => {
  productApi.getUserDetails()
    .then(result => {
      res.status(200).json({
        ok: true,
        data: result
      })
    })
    .catch(e => {
      console.log(e)
      res.status(e.status).json({
        ok: false,
        reason: e.errorMsg
      })
    })
})

router.get('/product', (req, res, next) => {
  productApi.getProduct(req.query.id)
    .then(result => {
      res.status(200).json({
        ok: true,
        data: result
      })
    })
    .catch(e => {
      console.log(e)
      res.status(e.status).json({
        ok: false,
        reason: e.errorMsg
      })
    })
})

router.post('/updateProduct', (req, res, next) => {
  productApi.updateProduct(req.body)
    .then(result => {
      res.status(200).json({
        ok: true
      })
    })
})

router.post('/updateImages', (req, res, next) => {
  productApi.updateImages(req.body)
    .then(result => {
      res.status(200).json({
        ok: true
      })
    })
})

module.exports = router
