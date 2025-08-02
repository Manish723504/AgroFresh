import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";

const Feedback = () => {

    const [feedback, setFeedback] = useState({ name: "", email: "", rating: "", remarks: "" })
    const URL = "http://localhost:5000/addFeedBack"

    function FetchData(e) {
        console.log(e);
        setFeedback({ ...feedback, [e.target.name]: e.target.value })
        console.log(feedback);

    }

    async function submitData(e) {
        e.preventDefault()
        try {
            const serverResponse = await axios.post(URL, feedback)
            console.log(serverResponse);
            Swal.fire({

                title: "👍Feedback Details👍",
                text: serverResponse.data.message,
                icon: "success"

            });
            setFeedback({ name: "", email: "", rating: "", remarks: "" })

        }
        catch (err) {

            console.log(err);

            
        }
    }
    return (
        <>
         <Header/>
            <div style={{ backgroundColor: "#EEAECA", backgroundImage: " radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)" }}>

                <div style={{ width: "50%", height: "750px", borderRadius: "10px", marginLeft: "25%" }}>

                    <h1 style={{ textAlign: "center", padding: "20px" }}>Feedback Form</h1>

                    <form onSubmit={submitData} >

                        <div className="mb-3" style={{ width: "70%", alignItems: "center", marginLeft: "90px" }}>
                            <label htmlFor="Name" className="form-label"> Name</label>
                            <input type="text" className="form-control" id="Name" placeholder="Enter First Name" name="name"
                                onChange={FetchData}
                                value={feedback.name}
                            />
                        </div>

                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }}>
                            <label htmlFor="exampleInputEmail1" className="form-label"> Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter Email Address"
                                name="email"
                                onChange={FetchData}
                                value={feedback.email}
                            />

                        </div>
                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }}>
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Rating</label>
                            <textarea className="form-control"
                                id="exampleFormControlTextarea1" rows="3"
                                name="rating"
                                placeholder="Rating"
                                onChange={FetchData}
                                value={Feedback.rating}
                                
                            > </textarea>

                        </div>

                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }}>
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Remarks</label>
                            <textarea className="form-control"
                                id="exampleFormControlTextarea1" rows="3"
                                name="remarks"
                                placeholder="Remarks"
                                onChange={FetchData}
                                value={Feedback.remarks}

                            > </textarea>

                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginLeft: "40%" }}>Submit</button>
                    </form>

                </div>

            </div>
        </>
    );

}

export default Feedback

