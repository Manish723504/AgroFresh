import express from 'express'
import { registation,farmerLogin, profile, addProduct } from '../controller/Farmer_Controller.js'
import {imageUpload} from "../middleware/ImageUpload_Middleware.js";




const farmerRouter=express.Router()

farmerRouter.post("/register", imageUpload,registation)//adding middle ware for image upload
farmerRouter.post("/login",farmerLogin)
farmerRouter.get ("/farmerProfile",profile)
farmerRouter.post ("/addProduct",addProduct)


export default farmerRouter