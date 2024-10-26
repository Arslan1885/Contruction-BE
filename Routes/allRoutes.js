import express from 'express';
import { contact } from '../Controller/contact.controller.js';
import { signup } from '../Controller/signup.controller.js';

const allRoute = express.Router();

allRoute.post('/contact' , contact)
allRoute.post('/signup' , signup)



export default allRoute
