import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
       
    }
    
}, { timestamps: true })

const signupData = mongoose.model('signups', signupSchema)
export default signupData