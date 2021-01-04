const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const  app = express()

const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: true}))
app.listen(PORT, (req,res) =>{
    console.log('server is runing at:', PORT)
})

// app.get('/',(req,res)=>{
//     //res.send('<h1>My first Backend App</h1>')
//     app.use('/public', express.static('public'))
//     res.sendFile(path.join(__dirname,'public', 'Home.html'))
// })

// app.get ('/aboutus',(req,res)=>{
//     //res.send('<h1>about us</h1>')
//     app.use('/public', express.static('public'))
//     res.sendFile(path.join(__dirname, 'public', 'Aboutus.html'))
// })

// app.get('/contactus',(req,res)=>{
//     app.use('/public', express.static('public'))
//     res.sendFile(path.join(__dirname, 'public', 'Contactus.html'))
// })

app.use(express.static(path.join(__dirname,'public')))

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname, 'registration', 'SignUp.html'))
})
app.post('/signup',(req,res)=>{
    res.send(req.body)
})