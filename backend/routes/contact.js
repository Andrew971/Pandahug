var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const contact = require('../Controllers/contacts')



router.post('/',jsonParser, (req, res) => {
    const{userName, age, email, phone, comments} =req.body
  console.log(userName, age, email, phone, comments)
  // contact.AddContact(userName, age, email, phone, comments)
    
  })


/* GET users listing. */
router.get('/', (req, res, next) =>{

  res.render('index', { title: 'Contact' });
});


module.exports = router;
