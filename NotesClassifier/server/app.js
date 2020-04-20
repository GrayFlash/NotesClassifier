const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./createNewFolder')
app.use(bodyParser.json())

const registerUser = mongoose.model("registerUser")
const createNewFolder= mongoose.model("createNewFolder")


const mongoUri ="mongodb+srv://login_app:Ig9G2lLVEazk84th@cluster0-oi6g0.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", ()=>{
    console.log("Connected to Mongo  boom ")
})


mongoose.connection.on("error", (err)=>{
    console.log("Error: ", err)
})


app.get('/',(req,res)=>{
    createNewFolder.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

// app.post('/login',(req,res)=>{
//     registerUser.find({email:req.body.email}).then(data=>{
//         res.send(data)
//         //console.log(data)
//     }).catch(err=>{
//         console.log(err)
//     })
// })

app.post('/createNew',(req,res)=>{
    const NewFolder = new createNewFolder({
        name: req.body.name,
        description: req.body.description
        })
    NewFolder.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("Server Running")
})