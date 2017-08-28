var express  = require ('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
app.locals.pagetitle = "Awesome Website ";

app.get('/',routes.index);
app.get('/about',routes.about);//url apps and away




app.get('*', function(req, res) {
	

	res.send('Bad Route');//Routes are used tp create single page apps
});

var server = app.listen(3000, function() {
	console.log('listening on port 3000');//express supports routing
});