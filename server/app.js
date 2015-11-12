var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/ang_people');
mongoose.connect('mongodb://heroku_4595q04t:m0o1qhkp632okojvh0415ka9a2@ds053164.mongolab.com:53164/heroku_4595q04t');

mongoose.model('Message', new Schema({"name": String, "location":String, "favoriteNumber": String},{collection: 'people'}));
var Message = mongoose.model('Message');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

    app.set('port', process.env.PORT || 5000);


    app.get('/people', function(req, res){
    Message.find({}, function(err, data){
        if (err) {
            console.log(err);
        }
        res.send(data);
    })
});

    app.post('/people', function(req,res){
        //console.log(req);
        var person = new Message({
            name: req.body.name,
            location: req.body.location,
            favoriteNumber: req.body.favoriteNumber
        });
        person.save(function(err, data){
            if(err) console.log(err);
            res.send(data);
        })
    });

app.delete('/people', function(req, res){
    //console.log(req);

    Message.findByIdAndRemove({"_id" : req.query.id}, function(err, data){
        if(err) console.log (err);
        res.send(data);
    });
});


    app.get('/*', function(req, res){
        var file = req.params[0] || '/views/index.html';
        res.sendFile(path.join(__dirname, "./public/", file));
    });




    app.listen(app.get('port'), function(){
       console.log('listening on port ', app.get('port'));
    });
