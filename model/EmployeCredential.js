const mongoose = require('mongoose')
const Schema=mongoose.Schema

const employeCredential=new Schema({
    
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true
    }
    
},

{
    timestamps:true
})
//module.exports=mongoose.model("Bus",dataSchema)
module.exports=mongoose.model('EmployeCredential',employeCredential);
