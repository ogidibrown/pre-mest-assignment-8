const express = require('express');
const users = require('./users');


const router = express.Router();
const usermodel = require ('./usermodel')



router.get('/', function(request, response){
    response.status(200).send("hello home")
})


router.post("/login", function(request,response){
    const { username, password } = request.body
    
    let user = users.filter(arrayelement => arrayelement.username === username)
    
    if(user.length == 1){
        
        if(user[0].password === password){
            response.send({message:"Login successful"})
        }
        response.send({message:"user or password is wrong"})
    } else {
        response.send({message:"User does not exit"})
    }
})

router.post('/signup', function(request,response){
    var newUser = { 
        name:request.body.name,
        password:request.body.password,
        email:request.body.email,
        number: request.body.number
    }

    users.push({newUser})
    console.log(users)
    response.status(200).send({message:"successful", data:newUser});
})



module.exports = router;