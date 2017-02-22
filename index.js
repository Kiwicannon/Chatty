var express = require('express')
var bodyParser = require('body-parser')
var messages = [{ }]
var app = express()

app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages',function(req, res, next){
    res.status(200).json({messages:messages});
});
app.post('/messages',function(req, res, next){
   messages.push({ message: req.body.message, time: new Date() });
    console.log(req.body);
    res.status(200).json({messages: messages});
});

app.listen(3000, function() {
    console.log("Server now live at port 3000")
})
