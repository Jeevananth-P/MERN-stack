let express=require("express")
let app=express()
let router=require("./router")
app.use(router);
app.use(express.static('public'));
app.listen(3001,()=>{
    console.log("Server connected")
});

