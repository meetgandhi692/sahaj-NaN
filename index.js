const express =require('express')
const bodyParser=require('body-parser')
const fs=require('fs')
const app=express()
const cors=require('cors')

const port =8080
const path="./db.json"


app.use(cors())
app.use(express.json())

app.get('/greeting',(req,res)=>{
    res.status(200).send("Hello world!")
})



app.post('/employee',(req,res)=>{
    console.log(req.body)
    data=fs.readFileSync(path,'utf-8','r')
    console.log(data['employee'])
    // data['employee'].push(req.body)
    // data['employee'].
    res.status(201).json({"employeeId":"2"})
})

app.listen(8080,()=>{
    console.log("Running on port 8080")
})