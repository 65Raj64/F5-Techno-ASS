
const express=require('express')
const router=express.Router()
const {studentCreate,GetUnique,GetCount,GetStd}=require("../Controller/controller")



router.post("/create",studentCreate);
router.get("/unisub",GetUnique);
router.get("/count",GetCount);
router.get("/std",GetStd);


module.exports=router;
