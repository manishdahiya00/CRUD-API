const USER = require("../models/model")
const bcrypt = require("bcryptjs")
//    Post  --------------->
const post = async (req, res) => {
    try {
      if (!req.body || !Object.keys(req.body).length) {
        res.status(400).json({ error: 'No data was sent in the request.' });
      } else {
        const { name, email, password } = req.body;
        if (!password || !email || !name) {
          res.status(400).json({ error: 'Please enter all details' });
        } else {
          try {
            hashedPass = await bcrypt.hash(password, 8);
            await USER.create({ name, email, password: hashedPass });
            res.status(200).json({ success: true });
          } catch (bcryptError) {
            res.status(500).json({ error: 'Error occurred while encrypting the password.' });
          }
        }
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
  
//   Home  --------------->
const hello = (req,res) =>{
res.status(200).json({success:true,message:"Welcome to the free api!!!!"});
}

//  Export Functions --------------->
module.exports = {
    post,
    getAll,
    get,
    Update,
    Delete,
    hello
}