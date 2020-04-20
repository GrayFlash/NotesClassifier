const mongoose = require('mongoose')

const  createNewFolderSchema = new mongoose.Schema({
    name:String,
    description:String
});

mongoose.model("createNewFolder",createNewFolderSchema)