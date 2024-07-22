import mongoose from 'mongoose';


const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            rewuired:true

        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
);

const User=mongoose.model('User',userSchema);
module.exports=User;