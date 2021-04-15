const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:adm!n@cluster0.j8axb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true})
        console.log('DB connected...');


    }catch(error){
        console.log(error);
    }


}

const connection = mongoose.connection

module.exports = connectDB;
