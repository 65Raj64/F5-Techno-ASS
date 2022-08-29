const mongoose=require("mongoose")
const StudentSchema= new mongoose.Schema({
    subject:{
       type:String,
       required: true
       
    },
    standard:{
        type:String,
        required: true
    },
    student:{
        name:{
              type:String,
              required: true
        },
        RollNo:{
            type:Number,
            required: true
        },
        address:{
            type:String,
            required: true
        },
        mobileNo:{
            type:Number,
            required: true
        },
        standard:{
            type:String,
            required: true
        },
        subject:{
            type:String,
            required: true
        }
    }
})
module.exports=mongoose.model("Student",StudentSchema)