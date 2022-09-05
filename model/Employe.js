const mongoose = require('mongoose')
const Schema=mongoose.Schema

const employeSchema=new Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
   
},
{
    timestamps:true
})
//module.exports=mongoose.model("Bus",dataSchema)
module.exports=mongoose.model('Employe',employeSchema);
