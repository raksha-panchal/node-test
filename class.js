 
var mongoose=require('mongoose');

 var classschema = new mongoose.Schema({
	class:{type:String,required:true},
    description:{type:String,required:true},
	price:{type:Number,required:true,default:5},
	authorId:{type:mongoose.Schema.Types.ObjectId},
	status:{type:String,default:"active",required:true}
    })


	var classs = module.exports= mongoose.model("teachers",classschema);
