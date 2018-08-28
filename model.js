var mongoose=require('mongoose');
var schema= new mongoose.Schema({
	fname:{type:String,required:true},
	lname:{type:String,required:true},
	email:{type:String,required:true,unique:true},
	Age:{type:Number,required:true},
	gender:{type:String,enum:["male","female"],required:true},
	Role:{type:String,enum:["student","teacher"],required:true},
    point:{type:Number,default:function(){
    	if(this.Role =="student"){
    		return 25;
    	}
    		return 0;
    	}},
    referencecode:{type:String,required:true}
   })


   


	var user = module.exports =  mongoose.model("users",schema);


