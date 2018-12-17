var apiai = require('apiai');
var App = apiai('74e6647c8ab3454f9f67383236ba34dd');

var express = require('express');
var router = express.Router();
var app = express()
var bodyParser = require('body-parser')
var userMessage = ''
var botAnswer = ''

var getRes = function(query) {
  var request = App.textRequest(query, {
      sessionId: '<unique session id>'
  });
const responseFromAPI = new Promise(
        function (resolve, reject) {
request.on('error', function(error) {
    reject(error);
});
request.on('response', function(response) {
  resolve(response.result.fulfillment.speech);
});
});
request.end();
return responseFromAPI;
};


app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({    
    extended: true
  })); 
app.use(express.json()); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
router.get('/', function(req, res, next) {
 
 res.render('index', { title: 'Chatbot' });
  
});
router.post('/message', function(req, resp, next) {
  userMessage = req.body.message
  console.log('req from the server : ',userMessage)
  getRes(userMessage).then((res) => {
    botAnswer = res 
    console.log("res from Bot : ",botAnswer)
    resp.json({
      type:'reply',
      text:res
    })
  })

  });
module.exports = router;
