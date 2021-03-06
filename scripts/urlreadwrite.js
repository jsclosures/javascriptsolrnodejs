
var fs = require('fs');
var http = require('http');
var readline = require('readline');


http.get("http://www.google.com/index.html", function(res) {
  console.log("Got response: " + res.statusCode);
  console.log("Got response: " + JSON.stringify(res.headers));
  
  var outstream = fs.createWriteStream('c:/temp/urlreadwrite.txt');

	outstream.writable = true;
	
  for(var p in res ){
  	console.log("Got response has: " + p);
  }
  var str = "";
  
  res.on('data', function (chunk) {
              str += chunk;
              outstream.write(chunk);
        });

  res.on('end', function () {
        console.log(str);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});