const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    userName:String,
    fn:String,
    ln:String,
    password:String,
    email:String,
    pic:String
})

const user =mongoose.model("users",userSchema);
module.exports=user;
