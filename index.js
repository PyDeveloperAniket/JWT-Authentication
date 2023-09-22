require('dotenv').config();
const app = require('express')();
const port = process.env.PORT;
const jwt = require('jsonwebtoken');


app.get('/', (req, res) =>{
    res.json({
        message:"A signle JWT API project"
    });
});


app.post('/login', (req, res) =>{
    const user = {
        id:1,
        uername:"Aniket",
        email:"aniket@gmail.com"
    }

    jwt.sign({user},process.env.SECRETKEY,{expiresIn:'300S'},(err,token)=>{
        res.json({
            token
        });
    })
});


app.post('/profile', verifyToken, (req, res) =>{
    jwt.verify(req.token, process.env.SECRETKEY, (err, authData)=>{
        if(err){
            res.send({result:"Invalid token"});
        } else{
            res.json({
                message:"Profile Access",
                authData
            })
        }
    })
});


function verifyToken(req, res, next) {
    const bearerHeader = req.header('authorization');

    if(typeof bearerHeader != 'undefined'){
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    } else{
        res.send({
            result:"Token is not valid"
        })
    }
}


app.listen(5000, ()=> {
    console.log("server listening on port", 5000)
})