var apiai = require('apiai');
 
var app = apiai('74e6647c8ab3454f9f67383236ba34dd');
var responseFromBot = ''
var request = app.textRequest('Hello', {
    sessionId: '<unique session id>'
});
 
request.on('response', function(res) {
    responseFromBot = res.result.fulfillment.speech
    console.log(responseFromBot);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();