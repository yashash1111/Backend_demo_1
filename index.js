const express = require('express')
const app = express()
const PORT = 3010

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.post('/signup', (req,res)=>{
    const {username, email, passward, dateOfBirth} = req.body
    if(!username||username.trim()===''){
        return res.status(400).json({error:"Username cannot be empty"})
    }
    if(!email||email.trim()===''){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if(!passward||passward.length<8||passward.length>16){
        return res.status(400).json({error:"Passward cannot be empty or less than 8 or greater than 16"})
    }

    console.log({username,email,passward,dateOfBirth})
    res.status(200).json({message:"Signed up succesfully"})
});


app.listen(PORT, ()=>{
    console.log(`Server is running in localhost http://localhost:${PORT}`)
})