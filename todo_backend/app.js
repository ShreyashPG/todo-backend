
const express = require('express');
const path = require('path');
const errorHandler = require('./middleware/errorHandler.js'); 
//var cookieParser = require('cookie-parser');

const mongoDB =require('./config/db.js')
const  User =require('./models/User.js')
//connect to mongoDB
mongoDB();


const app = express();



app.use(express.json());
app.use(errorHandler);



app.post('/user/register',async (req,res)=> {
          try{
            const newUser = new User(req.body);
              await newUser.save();
              res.status(200).send(newUser);
          }
          catch(error){
              res.status(400).send(error);

          }
});
app.get('/',(req,res)=>{
        res.send("Hello Fisrt page ");
})




const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log("connected to port succesfully !");
});
