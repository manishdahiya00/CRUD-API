const mongoose = require("mongoose")

const connectDB = async () => {
    try {
    await mongoose.connect("MongoURI/DBNAME",{
        useNewUrlParser : true,
        useUnifiedTopology:true
    })
    console.log("Connected To DB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB