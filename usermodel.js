const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    mobileno: String,
    username: String,
    password: String,
});



const UserModel = mongoose.model('UserModel', UserModelSchema);

module.exports = UserModel;