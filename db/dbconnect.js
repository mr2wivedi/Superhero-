import mongoose from "mongoose";
const connection={}

async function dbconnect(){
    if(connection.isConnected){
        return
    }
    const db =await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlparser:true,
        useUnifiedTopology:true
    })
    connection.isConnected = db.connections[0].readyState
}

export default dbconnect;