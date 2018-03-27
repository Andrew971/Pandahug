const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const contact = require('../Controllers/contacts')


router.post('/',jsonParser, (req, res) => {
    const{userName, age, email, phone, comments} =req.body
  
  contact.AddContact(userName, age, email, phone, comments)
    
  })









module.exports = router