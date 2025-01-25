const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.send("Hello harsh")
});

app.listen(6000,()=>{
  console.log("Server connected successfully on 6000 port")    
})
// console.log(__dirname)
