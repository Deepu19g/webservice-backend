const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Userschema = new Schema({
   
    executive_username: {
        type:String,
        required:true
    },
    executive_password: {
        type:String,
        required:true
    },
    
  },{timestamps:true});

  const User=mongoose.model('User',Userschema)
  module.exports=User