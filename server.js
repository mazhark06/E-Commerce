require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname , 'templates', 'login.html' ))
})
app.listen(PORT , (req,res)=>{
    console.log("App is listening on " , PORT);
    
})
