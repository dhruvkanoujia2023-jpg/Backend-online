const mongoose=require('mongoose');

const Developer_Schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    age:{
        type:Number,
        required:true
    },
    domain:{
        type:String,
        required:true,
        enums:["Frontend","Backend","FullStack"]
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("developers",Developer_Schema);

// {
//     "name":"Alex",
//     "email":"Alex12@gmail.com",
//     "age":20,
//     "domain":"Frontend"
// }