const mongoose = require('mongoose')

const  scheduleSchema = new mongoose.Schema({
    name:String,
    purpose:String,
    date: String,
    time:String
});

mongoose.model("schedule",scheduleSchema)