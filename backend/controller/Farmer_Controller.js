import farmerModel from "../model/Farmer_Model.js"
import ProductModel from "../model/Product_Model.js";


//addProduct function--------------------------------

export async function addProduct(request,response) 
{


  try {
    const {
      farmer,
      productName,
      productCategory,
      productDescription,
      productPrice,
      
    }
     = request.body;

    
    const productPic = request.file ? request.file.filename : '';

    const newProduct = new ProductModel({
      farmer,
      productName,
      productCategory,
      productDescription,
      productPrice,
      productPic,
      productStatus: 'available' 
    });

    await newProduct.save();
    response.json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    response.status(500).json({ error: 'Server error while adding product' });
  }
  
}

//farmer profile

export async function profile(request, response) {

   const email = request.query.email
   console.log(`email of user is ${email}`);

   try {

      const farmerDoc = await farmerModel.findOne({ email: email })
      response.json({ "profileData": farmerDoc })

   }
   catch (err) {

      console.log(err);

   }

}


//  Reqiestion Login Code

export async function registation(request, response) {


   const registationData = request.body

   const { email, password, name, phone, city, address } = registationData

   const pic = request.file.filename

   console.log(`picname is ${pic}`);

   try {

      const regDoc = new farmerModel({ email, password, name, phone, city, address, pic })
      await regDoc.save()

      response.json({ "message": "Regestration Done" })
   }
   catch (err) {

      console.log(err);


   }

}

//farmer login

export async function farmerLogin(request, response) {


   const logindata = request.body
   const { email, password } = logindata

   try {

      const adminDoc = await farmerModel.findOne({ email: email, password: password })

      if (adminDoc != null) {

         response.json({ "message": "Login Successful", "token": email, "status": "success" })
      }
      else {
         response.json({ "message": "Invalid Credential" })

      }

   }
   catch (err) {
      console.log(err);

   }
}



