import mongoose from "mongoose";
const DBURL=`mongodb+srv://manishmern:mernlearning@mycluster.d0eojtt.mongodb.net/project_db`

export const dbConnect=async()=>{

try{

const connection = await mongoose.connect(DBURL)
 console.log(`database connection establish Sucessfully`);
}

catch(error){

    console.log(error);
    
}

}