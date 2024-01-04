import mongoose from 'mongoose';

let isConnected = false;//track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery',true); //must do to avoid errors
    
    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI , {
            dbName:"share_prompt",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("Connected To MongoDB");
    } catch (error) {
        console.log(error);
    }
}