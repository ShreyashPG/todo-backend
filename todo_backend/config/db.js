import mongoose from 'mongoose';
import express from 'express';

const  app=express();

const mongoURL=mongodb="mongodb://localhost:27017/Badges";

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('Connected to MongoDB');
});

//app.use(express.json());

