const mongoose = require('mongoose')

const Schema =  mongoose.Schema;
const UserModelSchema= new Schema({
    email:String,
    hash: String,
    salt: String

})


const UserModel = mongoose.model('UserModel', UserModelSchema);
module.exports= UserModel;