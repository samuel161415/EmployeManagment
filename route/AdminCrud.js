const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const Employe=require('../model/Employe')
const employeCredential=require('../model/EmployeCredential')


// to create emplome credentials
router.post('/creatCredential',async(req,res)=>{

    try{
        const{Email,Password}=req.body; 
         
        if(!(Email&&Password)){
            res.status(400).send("All input is required");
        }
 
        // checking if their exists username and if it is reject it
        const oldUser=await employeCredential.findOne({Email})

        if(oldUser){
            return res.status(409).send("User Already Exist. Please Login")
        }

        // checks if the user is registered or not
        console.log("email ",Email," pass ",Password);
        const checkEmail=await Employe.findOne({Email});
        if(!checkEmail) return res.status(409).send("no user is registered with this email")

        // encrypt the password and store
       const encryptedPassword= await bcrypt.hash(Password,10);
       
       const credential= await employeCredential.create({
           UserName:Email.toLowerCase(),
           Password:encryptedPassword,
       })
       

    //    const token= jwt.sign(
    //        {EmployeId: customer._id, Email },
    //        "samuelismyname",
    //        {
    //            expiresIn: "3h",
    //        }
    //    );
    //    customer.token=token;
       return res.status(201).json(credential)
     } catch(err){
        return res.send(err)
     }
 
 })
 // used to update credential

 router.patch('/update',async(req,res)=>{

    try{
        const update=await employeCredential.updateOne(
               { Email: req.body.Email },
               { $set: { Email: req.body.Email,
                 Password:req.body.Password } }, // use this format for update or updateOne. 
                                                                 //it changes the values in upadate and leaves the other fileds unchanged
                 { upsert: true }  // used to insert if the object not found
            )
    
            res.send(update)
       
    }
    catch(err){
        res.send('error'+err)
    }
    })
    
    
    router.delete('/deleteAcount',async(req,res)=>{     // deleting username's acount
        try{
            const{id}=req.params
           const deleteEmployFromEmployeDatabase=await Employe.findOne({Email:req.body.Email,})
           const deleteEmplyeFromEmployCredentialDatabase=await employeCredential.findOne({Email:req.body.Email,})
           
           const returnVaue=await deleteEmployFromEmployeDatabase.remove()
           const returnValue2=await deleteEmplyeFromEmployCredentialDatabase.remove()
           res.json(returnVaue)
        }
        catch(err){
            res.send('error'+err)
        }
        })