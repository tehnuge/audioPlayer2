var express = require('express');
var app = express();


var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res) {
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
				<title>MEAN ToDo App</title>\
			</head>\
			<body>\
				<div ui-view>hello</div>\
			</body>\
		</html>\
		');
});

app.listen(PORT, function() {
	console.log('Server running on '+ PORT);
});