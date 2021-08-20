const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const Admin = require("./Models/Signup");
const User = require("./Models/Login");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const port = 3000;
mongoose
  .connect(
    "mongodb+srv://Deepak:mongodb20@cluster0.gdc4p.mongodb.net/sample_airbnb?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    })
  );

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/Signup", (req, res) => {
  const admin = new Admin({
    admin_username: req.body.admin_username,
    admin_password: req.body.admin_password,
    executive_username: req.body.executive_username,
    executive_password: req.body.executive_password,
    data_field: req.body.data_field,
  });
  try {
    if (req.body.key == "123") {
      admin.save().then(() => console.log("saved"));
      res.json("successfully saved");
    } else {
        console.log( req.body.key)
      res.json("cannot be saved");
    }
  } catch (err) {
    console.log(err);
  }
});


app.post("/Login",(req,res)=>{
    try{
        User.findOne({executive_username:req.body.executive_username})
    }catch(err){
        console.log()
    }

    
      
})