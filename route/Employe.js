const express=require('express')
const router=express.Router()

const Employe=require('../model/Employe')

console.log("hiii");
router.post('/createAcount',async(req,res)=>{
    console.log("I am excuted");
    const{FirstName,LastName,PhoneNumber,Email,Gender,DateOfBirth}=req.body; 
    // checking if there is missing input data 
    if(!(FirstName,LastName,PhoneNumber,Email,Gender,DateOfBirth)){
        res.status(400).send("All input is required");
    }
   // if(Gender.toLowerCase()!='m'||Gender.toLowerCase()!='f') res.status(400).send('Gender should be M or F')

    const value=new Employe({
        FirstName:FirstName,
        LastName:LastName,
        PhoneNumber:PhoneNumber,
        Email:Email,
        Gender:Gender,
       });

       try{
        const returnValue=await value.save()   // used to save data to database
        console.log("returnValue ",returnValue);
        res.json(returnValue)
      }
    catch(err){
        res.json(err);
    }

})

module.exports=router