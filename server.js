const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req,res)=>{
    
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname , 'templates', 'login.html' ))
    let userdetails = req.query
    console.log(userdetails);
    
})
app.get('/signup', (req,res)=>{
res.sendFile(path.join(__dirname , 'templates', 'Sign-up.html' ))
})
app.post('/signup', (req,res)=>{
    let usercredentials = req.body
    console.log(usercredentials);
   res.send('data recieved')
    
})
app.listen(PORT , (req,res)=>{
    console.log("App is listening on " , PORT);
    
})
