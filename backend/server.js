
// Express Stuff
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const Contact = require('./router/contacts')

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// web scraper


app.use("/contact", Contact)



app.post('/search', (req, res) => {

  //bodyparser get form data to pass into function w 3 parameters
  //asynchronous function that takes in form data that waits for results, the use cheerio to scrape h1s or id, plus links, with links save to jsonfile, send back res.object,
  let level = req.body.level
  let country = req.body.country
  let subject = req.body.subject

  console.log(level, country, subject)
  
  //  res.send(level)
  // axios.get(`https://www.google.ca/search?&q=best+${level}+${country}+${subject}`)

  axios.get(`https://www.topuniversities.com/universities/level/${level}/country/${country}/subject/${subject}`)
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data)
        const html = response.data;
        // console.log(html)
        const $ = cheerio.load(html);
        let searchResults = [];
        $('h2').each(function (i, elem) {
          if (i > 0) {
          searchResults.push({

            University: $(elem).text(),
            Ranking: " "


            // searchResults.push($(elem).text())

          });
        }
        })
        $('.uni_ranking').each(function (i, elem) {
          console.log($(elem).text())
          // searchResults.push($(elem).text())
          searchResults[i].ranking = $(elem).text()
        });
        console.log(searchResults)

        res.json(searchResults)
      }
    })
  })

      // Create the knex connection. This is used by bookshelf
      // in order to talk to our Postgres database. Replace
      // connection variables with your details




      // Connect bookshelf. Requiring bookshelf returns a function,
      // so we call that function with the knex object that we
      // got above. This syntax is similar to chaining functions.
      // require('bookshelf') returns a function, and then we call
      // that returned function by using parenthesis and passing
      // appropriate parameters, .e.g (knex)

      // CREATING MODELS
      // Models are the key to Bookshelf. Models are representations
      // of the schemas that we created using Knex migrations. We
      // have to create a model for every table that we want to
      // work with

      //Author model


      // app.get('/', (req, res) => {
      //   // Use a todos model to fetchAll of the todos
      //   contactForm.fetchAll()
      //     .then(results => {
      //       // console.log(results)
      //       const contactForm = results.models.map(contactForm => {
      //         return contactForm.attributes
      //       })
      //       res.json(contactForm)
      //     })
      // })




      // app.post('/update', (req, res) => {
      //   const todoItemUpdate = {
      //     value: req.body.value,
      //     done: req.body.done
      //   }
      //   new Todos({id:req.body.id})
      //   .save(todoItemUpdate, {patch: true})
      //   .then(todos => {
      //     console.log(todos.attributes)
      //   })
      // })

      // app.post('/delete', (req, res) => {
      //   Todos.where({done:true})
      //     .destroy()

      //       Todos.fetchAll()
      //       .then(results => {
      //         const todos = results.models.map(todo => {
      //           return todo.attributes
      //         })
      //         res.json(todos)
      //       })
      // })
      // })







      app.listen(8080)
