import { useState } from 'react';
import '../css/ContactUs.css'
import axios from "axios";
import Swal from 'sweetalert2'
import Header from './Header';



const Contactus = () => {

    const [contact, setContact] = useState({ name: "", email: "", phone: "", message: "" })

    const URL = "http://localhost:5000/AddContact"

    function FetchData(e) {
        console.log(e);
        setContact({ ...contact, [e.target.name]: e.target.value })
        console.log(contact);
    }
    async function submitData(e) {
        e.preventDefault()
        try {
            const serverResponse = await axios.post(URL, contact)
            console.log(serverResponse);

            Swal.fire({
                title: "👍Contact Details👍",
                text: serverResponse.data.message,
                icon: "success"
            });
            setContact({ name: "", email: "", phone: "", message: "" })
        }
        catch (err)
         {
            console.log(err);
        }
    }
    return (
        <>
            <Header />
            <div style={{ backgroundImage: "url('/farmer4.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", margin: "0", padding: "0", height: "100vh" }}>
                <h2 style={{ textAlign: "center", color: "white", fontFamily: " Helvetica, sans-serif", fontSize: "46px", padding: "25px" }}>Contact AgroFresh</h2>
                <div style={{ width: "40%", height: "550px", borderRadius: "10px", marginLeft: "30%", }}>

                    <form onSubmit={submitData}>

                        <div className="mb-3" style={{ width: "70%", alignItems: "center", marginLeft: "90px" }}>
                            <label htmlFor="Name" className="form-label"> Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter Name" name="name"
                                onChange={FetchData}
                                value={contact.name}

                            />
                        </div>

                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }} >
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder=" Enter Email Address "
                                name="email"
                                onChange={FetchData}
                                value={contact.email}

                            />

                        </div>
                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }}>
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                placeholder="Enter your phone number"
                                pattern="[0-9]{10}"
                                maxLength="10"
                                required
                                name="phone"
                                onChange={FetchData}
                                value={contact.phone}

                            />

                        </div>
                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }}>
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"> Message</label>
                            <textarea className="form-control"
                                id="exampleFormControlTextarea1" rows="3"
                                name="message"
                                placeholder="Question"
                                onChange={FetchData}
                                value={contact.question}

                            > </textarea>

                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginLeft: "40%" }}>Submit</button>
                    </form>

                </div>

                <div style={{ height: "300px", width: "100%", backgroundImage: "url(./homepage.webp)", padding: "60px" }}>
                    <h1 style={{ marginLeft: "600px", color: "green" }} >Need More Information?</h1>
                    <button type="button" class="btn btn-success" style={{ marginLeft: "700px" }}>CONTACT US TODAY</button>
                    <h1 style={{ marginLeft: "600px" }} >Or call us at: +91 7235040032

                    </h1>

                </div>

                <div style={{ width: "100%", height: "100px" }}></div>

            </div>

        </>
    );
}

export default Contactus
