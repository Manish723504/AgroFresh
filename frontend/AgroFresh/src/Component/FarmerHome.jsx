import axios from "axios"
import { useState, useEffect } from "react"
import FarmerHeader from "./FamerHeader"

function FarmerHome()
 {

    const URL = "http://localhost:5000/farmer/farmerProfile"

    const [profile, setProfile] = useState({ name: "", city: "", address: "", phone: "", pic: "" })

    const emailId = localStorage.getItem("emailKey")


    const fetchData = async () => {


        try {
            const params = { "email": emailId }
            const serverResponse = await axios.get(URL, { params })
            console.log(serverResponse.data.profileData);
            setProfile(serverResponse.data.profileData)

        }
        catch (err) {

            console.log(err);

        }
    }

    useEffect(() => {


        fetchData()


    }, [])

    return (
        <>

         
            <FarmerHeader />
            
            <div style={{textAlign:"center",marginTop:"50px"}}>
                <h1>Wellcome</h1>
                <h2>name:{profile.name}</h2>
                <h2>picture:{profile.pic}</h2>
                <h2>City:{profile.city}</h2>
                <h1>phone:{profile.phone}</h1>

                <img  style={{width:"100px",height:"20%"}} src={`http://localhost:5000/profilePics/${profile.pic}`} alt="" />

            </div>
        </>
    )
}
export default FarmerHome