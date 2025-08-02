
import ContactModel from "../model/Contact_Model.js";
import FeedbackModel  from "../model/Feedback_Model.js"
import mongoose from "mongoose";

export async function AddContact(request, response)
 {   
    
    const contactObject = request.body
    
    const { name, email, phone,message } = contactObject


    try {

        const contactDoc = new ContactModel({ name, email, phone, message })

        await contactDoc.save()

        console.log("Contact Added");

        response.json({ "message": "Contact Added Succesfully!" })


    }
    catch (err) 
    {
        console.log(err);


    }
}



//add feedback


export async function AddFeedBack(request, response)
 {   
    
    const feedbackObject = request.body
    
    const { name,email,rating,remarks } = feedbackObject


    try {


        
        const feedBackDoc = new FeedbackModel({name,email,rating,remarks})

        await feedBackDoc.save()

        console.log("feedback Added");

        response.json({ "message": "feed back Added Succesfully!" })


    }
    catch (err) 
    {
        console.log(err);


    }
}
