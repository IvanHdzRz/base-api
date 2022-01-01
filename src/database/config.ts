import mongoose from 'mongoose';

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_CONN_STRING!,);
        return null
    }catch(e){
        return e
    }
}

export default connectDB;