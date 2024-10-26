import mongoose from 'mongoose'
const dbcon =async()=>{
try {
    const conection = process.env.DB_URL;
    await mongoose.connect(conection);
    console.log('Database is connected')
    
} catch (error) {
    console.log(error)
    
}
}
export default dbcon