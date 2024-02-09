const { Schema, model } = require("mongoose");
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

const UserModel = Schema({
   userId:{
    type:String,
    default: uuid,
    unique:true
   },
   fullName:{
    type:String
   },
   email:{
    type:String,
    unique:true,
    lowercase: true,
    trim: true,
   },
   password:{
    type:String,
    required:true,
   }
},
{
 timestamps: true,
})


const User = model('users',UserModel)
module.exports= User