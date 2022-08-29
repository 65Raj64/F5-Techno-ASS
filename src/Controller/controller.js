
const model=require("../model/model")


// Post  API  for create a student Data
const studentCreate=async function(req,res){
    try {
       
        let data = req.body;
        let createStudent= await model.create(data)
        console.log(data)
        res.status(201).send({ status: true, msg:createStudent })
    
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }   
    
}


///// Que 1. Get Unique subject from student having standard 8th.

const GetUnique=async function(req,res){
    try{

        let data=await model.find({standard:"8 th"}).select({subject:1,_id:0})
        console.log(data)
       let map={}
        for(let key of data){
            map[key.subject]=(map[key.subject] || 0)+1
        }
        res.status(200).send({status:true,data:Object.keys(map)})
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }   
}


//// Que 2. Get count of student having subject maths.


const GetCount=async function(req,res){
    try{

        let data=await model.find({$or:[{subject:"Math"}]}).count()

        res.status(200).send({status:true,data:data})
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }   
}


/// Que 3. Get of standards having subject maths.

const GetStd=async function(req,res){
    try{

        let data=await model.find({$or:[{subject:"Math"}]}).select({standard:1})

        let map={}
        for(let key of data){
            map[key.standard]=(map[key.standard] || 0)+1
        }
       
        res.status(200).send({status:true,data:Object.keys(map)})
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }   
}



/////////// Que 4. 
//Write solution for,  if function A is calling to function B if function B returns pending state.
//

async function a() 
{
    let ans = await calltoB()
    return ans
}

let res = a()
console.log(res)

function calltoB() 
{
    return setTimeout(() => {
        console.log('THis is an asynchronous work')
    }, 5000)
}

module.exports={studentCreate,GetUnique,GetCount,GetStd}