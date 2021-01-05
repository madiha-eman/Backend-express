const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const  app = express()

const PORT = process.env.PORT || 4000;
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
let user = [
    {name:'madiha', email:'madi@gmail.com',password: '2233', id:1 },
    {name:'asma', email:'asso@gmail.com',password: '2211', id:2 }

]

app.use(express.static(path.join(__dirname,'public')))
app.use('/public', express.static('public'))


app.get('/signup',(req,res)=>{
    app.use('/registration', express.static('registration'))
    res.sendFile(path.join(__dirname, 'registration', 'SignUp.html'))
})
app.post('/signup',(req,res)=>{
    let {name,email,password} = req.body
    let found = user.some((item)=>item.email == email)
    if(found){
        res.send('user already existed')
    } else{
        user.push({email,name,password,id:user.length+1})
        res.redirect('/login')
    
    }
})
app.get('/login',(req,res)=>{
    app.use('/registration', express.static('registration'))
    res.sendFile(path.join(__dirname, 'registration', 'Login.html'))
})
app.post('/login', (req,res)=>{
    let {name,email,password} = req.body
    let found1 = user.some((item)=>item.email == email && item.password == password)
    if(found1){
        res.redirect('/')
    }
    else{
        res.send('not correct email or password')
    }

})