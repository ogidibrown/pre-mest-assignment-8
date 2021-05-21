const crypto = require('crypto')

const genPassword=(password)=>{
    var salt = crypto.randomBytes(32).toString('hex');
    var genHash= crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    return{
        salt: salt,
        hash: genHash
    }
}

const validPassword=(password, salt, hash)=>{
    var hashVerified = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
       
    return hash ===hashVerified;

}


module.exports = {
    genPassword, validPassword
}