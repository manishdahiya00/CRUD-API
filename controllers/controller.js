const USER = require("../models/model")

//    Post  --------------->
const post = async (req,res) =>{
    try {
        if (!req.body || !Object.keys(req.body).length) {
      res.status(400).json({ error: 'No data was sent in the request.' });
    } else {
      await USER.create(req.body);
      res.status(200).json({ success: true });
    }
      } catch (error) {
        console.log(error);
      }
}

//   Get All  --------------->
const getAll = async (req,res) =>{
   try {
    const data =  await USER.find()
    res.status(200).json({data})
   } catch (error) {
    console.log(error);
   }
}


//   Get Single  --------------->
const get = async (req,res) =>{
    try {
        const user =  await USER.findById(req.params.id)
    if (user) {
        res.status(200).json({user})
    }else{
        res.status(404).json({success:false})
    }
    } catch (error) {
        console.log(error);
    }
}

//   Update  --------------->
const Update = async (req,res) =>{
    try {
    const user = await USER.findByIdAndUpdate(req.params.id)
    if (user) {
        await USER.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            findAndModify:true,
            runValidators:true
        })
           res.status(200).json({success:true})
    }else{
        res.status(404).json({success:false})
    }
   
    } catch (error) {
        console.log(error);
    }
}

//   Delete  --------------->
const Delete = async (req,res) =>{
    try {
        const user = await USER.findByIdAndDelete(req.params.id)
        if (user) {
            await USER.findByIdAndDelete(req.params.id)
               res.status(200).json({success:true})
        }else{
            res.status(405).json({success:false})
        }
       
        } catch (error) {
            console.log(error);
        }
    }


//  Export Functions --------------->
module.exports = {
    post,
    getAll,
    get,
    Update,
    Delete,
}