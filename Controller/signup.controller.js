import nodemailer from 'nodemailer'
import signupData from "../models/signup.model.js";

export const signup = async (req, res) => {
    try {
        const { email} = req.body;
        if (!email) {

            res.status(409).json({ Message: "Email is required" })
        }
        const data = new signupData({ email});
        const result = await data.save()
        if (result) {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.USER_NAME,
                    pass: process.env.USER_PASSWORD
                }
            })

            const mailOption = {
                from: "arslang1885@gmail.com",
                to: email,
                subject: "Sign Up successfull",
                text: `Dear Customer, \n\nYou have signed up successfully.`
            }
            await transporter.sendMail(mailOption)

            return res.status(200).json({ Message: "Thank You!", result })


        } else {
            return res.status(400).json({ Message: "Message not sent" })

        }

    } catch (error) {
        console.log(error)

    }


}