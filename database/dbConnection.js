const mongoose=require('mongoose')
const connectionString=process.env.DBCONNECTIONSTRING
mongoose.connect(connectionString).then(res=>{
    console.log("mongo db atlas connected successfully with pf sever");
}).catch(err=>{
    console.log("mongo db atlas connected fail");
    console.log(err);
})