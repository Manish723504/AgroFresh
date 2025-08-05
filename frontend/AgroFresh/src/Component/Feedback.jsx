import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import Footer from "./Footer";
import '../css/Feedback.css'

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
            <Header />

    <div className="contact-container" >
      <div className="contact-box" >
        <div className="contact-info">
        </div>

        <form className="contact-form"  onSubmit={submitData}>
          <h2>Feedback Form</h2>
          <p>Just write us a feedback</p>

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={FetchData}
            value={feedback.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={FetchData}
            value={feedback.email}
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating"
           onChange={FetchData}
           value={feedback.rating}
          />
          <textarea
            name="remarks"
            placeholder="Write your message"
            rows="4"
           onChange={FetchData}
          value={feedback.remarks}
          ></textarea>

          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </div>

            <div style={{ height: "300px", width: "100%", backgroundImage: "url(./homepage.webp)", padding: "40px" }}>
                <h1 style={{ marginLeft: "500px", color: "green" }} >Need More Information?</h1>
                <button type="button" class="btn btn-success" style={{ marginLeft: "600px" }}>CONTACT US TODAY</button>
                <h1 style={{ marginLeft: "500px" }} >Or call us at: +91 7235040032 </h1>
            </div>
            <Footer />

        </>
    );

}

export default Feedback

