const Contact = require('../Models/Contacts')

function AddContact(userName, age, email, phone, comments) {

    const newContact = new Contact({
        userName: userName,
        age: age,
        email: email,
        phone: phone,
        comments: comments
    })
    newContact.save()

}


module.exports = {AddContact}