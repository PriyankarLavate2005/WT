 const mongoose=require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected successfully");
    } catch (e) {
        console.log("something went wrong", e);
    }
};
module.exports=connectDB
