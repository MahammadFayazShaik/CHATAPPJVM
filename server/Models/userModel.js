const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String , required :true ,minLength :3 , maxLength:50 },
    email: {type : String , required : true , minLength :10 , maxLength :50 ,unique : true },
    password : {type : String , required : true , minLength :10 , maxLength :1024}
},{
    timestamps: true ,
}
);

const userModel = mongoose.model("User", userSchema)

module.exports = userModel;