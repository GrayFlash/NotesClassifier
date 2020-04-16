const mongoose = require('mongoose')

const  registerUserSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    college:String
});

mongoose.model("registerUser",registerUserSchema)
