const expres = require("express");

const bodyParser = require("body-parser");

const app = expres();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
	var num01 = Number(req.body.value01);
	var num02 = Number(req.body.value02);

	var num03 = num01 + num02;

	res.send("The Result is " + num03);
	console.log("The Result is " + num03);
});

app.listen(4000, function(){
	console.log("Server started at port 4000");
});