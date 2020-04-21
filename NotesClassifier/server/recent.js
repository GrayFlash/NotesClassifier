const mongoose = require('mongoose')

const  recentSchema = new mongoose.Schema({
    name:String,
    description:String
});

mongoose.model("recent",recentSchema)