import contactData from "../models/contact.model.js";
import nodemailer from 'nodemailer'

export const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {

          return  res.status(409).json({ Message: "Please fill all fields!" })
        }
        const data = new contactData({name , email , message});
        const result = await data.save()
        if (result) {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com", 
                port:587,
                secure:false,
                auth:{
                    user: process.env.USER_NAME,
                    pass: process.env.USER_PASSWORD
                }
            })

            const mailOption ={
                from: "arslang1885@gmail.com", 
                to:email,
                subject:"Thank you for Contacting us",
                text: `Dear ${ name }, \n\nThank you for reaching out to us.We have received your message and will get back to you shortly.`
            }
            await transporter.sendMail(mailOption)

            return res.status(200).json({Message:"Message sent successfully" , result})
            
            
        } else {
            return res.status(400).json({Message:"Message not sent"})
            
        }

    } catch (error) {
        console.log(error)

    }


}