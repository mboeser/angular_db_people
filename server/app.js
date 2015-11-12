var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/ang_people');
mongoose.connect('mongodb://heroku_4595q04t:random_password@ds053164.mongolab.com:53164/heroku_4595q04t');

mongoose.model('Message', new Schema({"name": String, "location":String, "FavoriteNumber": String},{collection: 'people'}));
var Message = mongoose.model('Message');

    app.set('port', process.env.PORT || 5000);



    app.get('/people', function(req, res){
    Message.find({}, function(err, data){
        if (err) {
            console.log(err);
        }
        res.send(data);
    })
});


    app.get('/*', function(req, res){
        var file = req.params[0] || '/views/index.html';
        res.sendFile(path.join(__dirname, "./public/", file));
    });




    app.listen(app.get('port'), function(){
       console.log('listening on port ', app.get('port'));
    });
