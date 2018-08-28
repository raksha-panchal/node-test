var express=require('express')
var app=express();
var config=require('./config')
var bodyParser=require('body-parser')
var userAction=require('./userAction')
var mongoose=require('mongoose');

app.use(bodyParser.json());
mongoose.connect(config.URL)

app.post('/register',(req,res)=>{
	userAction.register(req,res)
})

app.get('/getuser/:id',(req,res)=>{
	//console.log("hello")
	userAction.getuser(req,res)
})

/*app.post('/updateuser/:id',(req,res)=>{
	userAction.updateuser(req.res)
})*/

app.post('/addclass/:id',(req,res)=>{
	userAction.addclass(req,res)
})

app.get('/buyclass/:id',(req,res)=>{
	console.log("sdf")
	userAction.buyclass(req,res)
})








app.listen(config.port,()=>{
	console.log("server is listenning")
})
