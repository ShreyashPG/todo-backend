
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');

const mongoDB =require('./config/db.js')
const  User =require('./models/User.js')
//connect to mongoDB
mongoDB();


var app = express();



app.use(express.json());
//app.use(express.urlencoded({ extended: false }));



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


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
