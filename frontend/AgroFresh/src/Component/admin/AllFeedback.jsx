import axios from "axios"
import { useEffect, useState } from "react"

function AllFeedback() 
{
    const [feedback, setFeedback] = useState([])
    const URL = "http://localhost:5000/admin/allFeedback"


    const fetchData = async () => 
        {

        try {

            const serverResponse = await axios.get(URL)
            console.log(serverResponse);
            setFeedback(serverResponse.data.FeedbackDetails)

        }

        catch (err) {


            console.log(err);


        }
    }
    useEffect(() =>
         {

        fetchData()

    }, [])

    return(
        <>
        <h1>Feedback Details</h1>
        </>
    )
    

}
export default AllFeedback