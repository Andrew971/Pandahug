const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

let cart = []

router.get('/', (req, res) => {

  res.send(cart)

})

router.post('/', jsonParser, (req, res, body) => {
   let data = req.body
    cart.push(data)
    res.json(cart)


})




module.exports = router