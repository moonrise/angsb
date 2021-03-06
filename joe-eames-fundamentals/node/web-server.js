var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var events = require("./eventsController");

var app = express();
var rootPath = path.normalize(__dirname + "/../");

app.use(express.static(rootPath + "/app"))
//app.use(express.static("/Users/bjjeong/dev/github/angsb/joe-eames-fundamentals/app"))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello Express World')
})

app.get('/data/event/:id', events.get)
app.get('/data/event', events.getAll)
app.post('/data/event/:id', events.save)

// for html5 compliant routing only (for the initial serve)
app.get('*', function(req, res) { res.sendfile(rootPath + "/app/index.html"); });

var port = 8000
app.listen(port)
console.log("express listening on port " + port + "...")
