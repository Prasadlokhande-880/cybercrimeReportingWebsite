const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SE",{

})
.then((res)=>{
    console.log("server is live");
})
.catch((err)=>{
    console.log("there is an error",err);
})