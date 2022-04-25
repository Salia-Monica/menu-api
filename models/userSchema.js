
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{ String,
    require: true,
    unique:true,
    },
email:{
    type:String,
    require:true,
    
},
password:{
    type:String,
    require:true,
    unique:true
},


})

const User = mongoose.model("user", userSchema);
module.exports=User;