const mongoose = require('mongoose')

const  loginUserSchema = new mongoose.Schema({
    Email:String,
    password:String
});

mongoose.model("loginUser",loginUserSchema)
