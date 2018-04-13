var express = require('express');
var router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.post('/',jsonParser, (req, res) => {

  console.log('ok')
  let level = req.body.level
  let country = req.body.country
  let subject = req.body.subject

  console.log(level, country, subject)


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

          });
        }
        })
        $('.uni_ranking').each(function (i, elem) {
          console.log($(elem).text())
          searchResults[i].ranking = $(elem).text()
        });
        console.log(searchResults)

        res.json(searchResults)
      }
    })
  })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Search' });
});

module.exports = router;
