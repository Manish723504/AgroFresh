import axios from "axios"
import { useEffect, useState } from "react"
import FarmerHeader from "../FamerHeader"

function AdminHome()
{

    const URL ="http://localhost:5000/admin/adminProfile"

    const [profile,setProfile]=useState({name:"",email:"",password:"",phone:""})


const emailID= localStorage.getItem("emailKey")

const fetchData =async () => {
 
    
try{
const params ={"email":emailID}
 const serverResponse=await axios.get(URL,{params})
 console.log(serverResponse.data.profileData);
 setProfile(serverResponse.data.profileData)
 
}

catch(err){
    console.log(err);
    
}

}

useEffect(()=>
{

    fetchData()

},[])



    return(
        <>
        <FarmerHeader/>
        <div style={{marginTop:"50px",textAlign:"center"}}>
            
             <h1>WellCome My Admin Page </h1>

             <h1>phone:{profile.phone}</h1>
             <h1>name:{profile.name}</h1>
             </div>


        
        </>
    )
}
export default AdminHome