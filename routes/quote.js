var express = require('express');
var router = express.Router();
const axios = require('axios');

const url = 'https://zenquotes.io/api/quotes'


/* GET users listing. */
router.get('/', function(req, res, next) {
  axios
  .get(url)
  .then(function (response) {
    let data = response.data[1]
    let word_short;
    let word_long;
    let word_so_long;
    let background;
    let background0;
    let background1;
    let background2;
    let background_length = 3;
    background = Math.floor(Math.random()*background_length)
    
    
    if(background==0){
      background0 = true;
    } else if(background==1){
      background1 = true;
    } else {
      background2= true;
    }
    
    if(response.data[0].a == "zenquotes.io"){
      let message = "Too many requests. Please wait while and push button later.";
      let error_often = true;
      res.render('quote', {message, error_often,background0, background1, background2})
    } else if(data.q.length > 170){
      word_so_long = true;
      res.render('quote', {data, word_short, word_long, word_so_long, background0, background1, background2})
    }
    else if(data.q.length > 80){
      word_long = true;
      console.log(data.q.length)
      res.render('quote', {data, word_short, word_long, word_so_long, background0, background1, background2})
    } else{
      word_short = true;
      console.log(data.q.length)
      res.render('quote', {data, word_short, word_long, word_so_long, background0, background1, background2})
    }
  }).catch(function (error) {
    console.error(error);
  });
  })
  
 


module.exports = router;
