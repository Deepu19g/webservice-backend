const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
    admin_username: {
        type:String,
        required:true
    },
    admin_password:  {
        type:String,
        required:true
    },
    executive_username: {
        type:String,
        required:true
    },
    executive_password: {
        type:String,
        required:true
    },
    data_field:[]
  },{timestamps:true});

  const Admin=mongoose.model('Admin',AdminSchema)
  module.exports=Admin