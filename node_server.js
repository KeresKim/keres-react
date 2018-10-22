var express = require('express');
var fs   = require('fs');
var mime = require('mime');
var url =  require('url');
var app = express();
var pathname;
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var compression = require('compression');
var validator = require('express-validator');
var dbobj;
const murl = 'mongodb://kiyoong:minji930764@ds129823.mlab.com:29823/kiyoong_db';

mongodb.MongoClient.connect(murl, (err, db) => {
	if (err) {
	  console.error(err)
	  process.exit(1)
	}else{
		dbobj = db;
		console.log("db connection OK===");
	}
});

//app.use(logger('dev'))
//app.use(errorHandler())  
app.set('port', process.env.PORT || 3000);
app.use(validator());
app.use(compression());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/get-messages', (req, res, next) => {
	console.log("dbmessages : get ==== 1");
	req.messages = dbobj.collection('messages');
    req.messages.find({}, {sort: {_id: -1}}).toArray((err, docs) => {
      if (err) return next(err)
      return res.json(docs)
    })
});

app.post('/del-messages', (req, res, next) => {
	console.log("messages : del All ==== 4");	    
	dbobj.collection('messages').deleteMany({	});
	return res.end();
});

app.post('/post-messages', (req, res, next) => {
	console.log("messages : post ==== 2");
	console.log("messages=="+req.body.message);
	    
	//req.checkBody('message', 'Invalid message in body').notEmpty()
	//req.checkBody('name', 'Invalid name in body').notEmpty()
	let newMessage = {
		message: req.body.message,
		name: req.body.name
	}
	let errors = req.validationErrors()
	if (errors) return next(errors)
	//req.messages.insert(newMessage, (err, result) => {
		dbobj.collection('messages').insertOne(newMessage, (err, result) => {
		if (err) return next(err)
		return res.json(result.ops[0])
	})
});  

app.use('/', function(req, res) {
	//res.render('home');
	pathname = __dirname + req.url;
	if(req.url == "/"){
	   pathname = pathname + "index.html"  
	}

	console.log("req.url:"+req.url);
	if(req.url == "/get-messages"){
		console.log("dbmessages : get ==== 3")
		req.messages = dbdata.collection('messages');
		req.messages.find({}, {sort: {_id: -1}}).toArray((err, docs) => {
		  if (err) return next(err)
		  return res.json(docs)
		});	
	}
		
	console.log("Pathname:"+pathname);
	fs.stat(pathname, function(err, stats) {      
		if (err) {
			res.writeHead(404);
			console.log("ERR 404");
			res.write('Bad request 404\n');
			res.end();
		} else if (stats.isFile()) {
			// content type
			var type = mime.getType(pathname);
			console.log(type);
			res.setHeader('Content-Type', type);

			// 200 status - found, no errors
			res.statusCode = 200;
			
			// keres index.html 
			fs.readFile(pathname, function(error, fileContent){
				if(error){
					//res.writeHead(500, {'Content-Type': 'text/plain'});
					res.end('Error');
				}
				else{
					//res.writeHead(200, {'Content-Type': 'text/html'});
					res.write(fileContent);
					res.end();
				}
			});

			// create and pipe readable stream
			/*var file = fs.createReadStream(pathname);
			file.on("open", function() {
				file.pipe(res);
			});
			file.on("error", function(err) {
				console.log(err);
			}); */
		} else {
			res.writeHead(403);
			console.log("ERR 403");
			res.write('Directory access is forbidden');
			res.end();
		}
	});
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	console.log("ERR 500");
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
