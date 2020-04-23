const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./recent')
require('./schedule')
require('./createNewFolder')
app.use(bodyParser.json())

const schedule = mongoose.model("schedule")
const createNewFolder= mongoose.model("createNewFolder")
const recent = mongoose.model("recent")

const mongoUri ="mongodb+srv://gray_lappy:5H46eq3VIP2TRKhV@cluster0-oi6g0.mongodb.net/test?retryWrites=true&w=majority"

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

app.get('/scheduledDocsInfo',(req,res)=>{
    schedule.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.get('/recent_view',(req,res)=>{
    recent.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/set-schedule',(req,res)=>{
    const Schedule = new schedule({
        name: req.body.name,
        purpose: req.body.purpose,
        date: req.body.date,
        time: req.body.time,
    })
    Schedule.save()
    .then(data=>{
        console.log("Scheduled List Update")
        console.log(data)
        res.send(data)
    }).catch(err=>
        console.log(err))
})

app.post('/recentFolder',(req,res)=>{
    const Recent = new recent({
        name: req.body.name,
        description: req.body.description
    })
    Recent.save()
    .then(data=>{
        console.log("Recently Visited")
        console.log(data)
        res.send(data)
    }).catch(err=>
        console.log(err))
})

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