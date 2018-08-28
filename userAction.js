var model=require('./model');
var classSchema=require('./class');


function register(req,res){
   var users= new model(req.body)
   users.save((err,data)=>{
   	if(err){
   		return res.json({ code:500,message:"internal server error"})
   	}else{
   	return res.json({code:200,message:"user successfully signed up",data})
   }
   })
}

function getuser(req,res){
	model.findOne({"_id":req.params.id},(err,data)=>{
		if(err){
			return res.json({code:500,message:"internal server error"})
		}else{
			return res.json({code:200,message:"success",data:data})
		}
	   })
       }

/*function updateuser(req,res){
	model.findById(req.params.id,(err,data)=>{
			if(err){
				return res.json({code:500,message:"Internal server error"})
			}else if(!data){
				return  res.json({code:404,message:"user not found"})

			}else{
				model.update({_id:req.params.id},{$set:req.body},(err,result)=>{
					return (err) ? res.json({code:500,message:"Internal server error"}): res.json({code:200,message:"updated",data:result})
				})
			}
		})
}
*/
function addclass(req,res){

	console.log("req",req.body);
    model.findOne({"_id":req.params.id},(err,data)=>{
    	if(err){
    		return res.json({code:500,message:"internal server error"})
    	}else{
      var classschema=new classSchema(req.body)
	  if(data.Role=="teacher")
	  {
	 classschema.authorId = data._id
	 classschema.save((err,data)=>{
		if(err){
			return res.json({code:500,message:"internal server error"})
		}else{
			return res.json({code:200,message:"data save successfully",data})
		}
	})
    }
    else{
	return res.json({code:500,message:"are you not student"})

}
}
})
}






function buyclass(req,res){
	console.log("hello")
	model.findById(req.params.id,(err,data)=>{
		   if(err){
			return res.json({code:500,message:"internal server error"})
		   }else {
			if(data.point>=5)
		   {
			console.log("helo")
				return data.point-=5;
			}
			return res.json({code:200,message:"data save successfully",data})
		}
		})
	}

	





module.exports={
	register ,
	getuser,
	//updateuser
	addclass,
	buyclass
}