var express = require('express')
var protobuf = require('protocol-buffers')
var fs = require('fs');
var messages = protobuf(fs.readFileSync('geolocation.proto'))

var app = express()

// POST method route
app.post('/', function (req, res) {
    var size = 0;

    req.on('data', function (data) {
         console.log(data)
         var obj = messages.GeoLocation.decode(data)
         console.log(obj) // should print an object similar to above
    });

    req.on('error', function(e) {
        console.log("ERROR ERROR: " + e.message);
    });

    res.send("Thanks");
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
