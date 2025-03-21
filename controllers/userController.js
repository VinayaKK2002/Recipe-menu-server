const users=require('../models/userModel')
const jwt = require('jsonwebtoken')

//register
 exports.registerController = async (req,res)=>{
   console.log("inside register controller");
    console.log(req.body);
    const {username,email,password} = req.body
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Already existing user...Please login!..")
        }else{
            const newUser =new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
   
    
}



//login
exports.loginController = async (req,res)=>{
     console.log("Inside login controller");
     
     const {email,password}= req.body
    console.log(email,password);
    try{
         const existingUser = await users.findOne({email,password})
         if(existingUser){
             //token genration
             const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
             console.log(token);
            res.status(200).json({
                user:existingUser,token
            })
         }else{
             res.status(404).json("Incorrect Email/password")
         }
     }catch(err){
        res.status(401).json(err)
     }
    
}