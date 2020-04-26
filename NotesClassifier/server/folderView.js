const mongoose = require('mongoose')

const  folderViewSchema = new mongoose.Schema({
    name:String,
    document: String,
    folderName: String
});

mongoose.model("folderView",folderViewSchema)