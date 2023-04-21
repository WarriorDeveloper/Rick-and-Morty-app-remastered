import mongoose from "mongoose"

const connection = async ()=>{
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/rymdb')
        console.log('db connected:', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

export default connection