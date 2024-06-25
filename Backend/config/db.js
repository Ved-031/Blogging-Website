import mongoose from 'mongoose'

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default connectDB