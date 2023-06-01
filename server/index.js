const express = require("express");
const cors = require ("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");



const app = express();
require("dotenv").config();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
app.use(express.json());
app.use(cors());
app.use("/api/users",userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);

app.get("/",(req,res)=>{
    res.send("..Welcome to MY chatApi..");
});



const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port,(req,res) =>{
    console.log(`server is RUNNING : ${port}`);
});


mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology :true,
}).then(()=>
    console.log("DB connection Established"))
   .catch((error)=>
   console.log("Error in Connection:",error.message));
