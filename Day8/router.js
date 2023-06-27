let express=require("express");
let path=require("path");
let router=express.Router();
router.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,"public/index.html"))
});

module.exports = router;