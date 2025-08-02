import express from "express";
import { AddContact,AddFeedBack } from "../controller/Common_Controller.js";

const commonRouter=express.Router()

commonRouter.post("/addContact",AddContact)
commonRouter.post("/addFeedBack",AddFeedBack)


export default commonRouter