const express = require('express');

const router = express.Router();

const usermodel = require('./usermodel');

const{ genPassword, validPassword} = require('./brown/password');


router.post("/login", async (request, response)=>{
    const {email, password} = request.body;

    let responseData = await usermodel.findOne({email});

const isValid = validPassword(password, responseData.salt, responseData.hash)

    
    if (isValid) {
        
            response.status(200).send({success:true, message:"successful"})
        }else{
            response.status(400).send({failure:true, message:"Wrong Username or password"})
            }

  


})








router.post("/signup", async (request, response)=>{
    const {email, password} = request.body

const saltHash = genPassword(password)
const salt = saltHash.salt
const hash = saltHash.hash
    

 try{
    let newuser = new usermodel({email, salt, hash})
    let responseData= await newuser.save()
    response.send({message:"you have successfully signed up. You can login now", data:responseData})
 }catch (error){
     response.send({message:error})
 }

 console.log("new user added");

})

module.exports = router;
