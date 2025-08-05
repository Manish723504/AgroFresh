import { useState } from "react"

import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";





function FarmerRegistation() {



    const [regData, setRegData] = useState({



        email: "",

        password: "",

        name: "",

        phone: "",

        city: "",

        address: ""

    })



    const [pic, setPic] = useState(null)



    const fetchData = (e) => {

        const { name, value, type, files } = e.target;  // destructing target object



        if (type === "file") {

            console.log(files[0])

            setPic(files[0]);



        }

        else {



            setRegData({ ...regData, [name]: value })

        }



    };// fetch data close



    const submitData = async (e) => {



        e.preventDefault()

        const formData = new FormData();

        for (const key in regData) {

            formData.append(key, regData[key])// to set value from object

        }



        if (pic) {

            formData.append("pic", pic)

        }

     for(let [key, value] of formData.entries())

{


console.log(`${key}:`,value);
    
}



const URL ="http://localhost:5000/farmer/register"

 try{

   const serverResponse = await axios.post(URL,formData)

    console.log(serverResponse.data.message);

    alert(serverResponse.data.message)



    setRegData(



        {

        email: "",

        password: "",

        name: "",

        phone: "",

        city: "",

        address: ""

        }

    )

    setPic(null)

    

}

 catch (err){



console.log(err);

 }





    }

    //submit Data close



    return (

        <>

 <Header/>



            <div style={{ backgroundColor: "#EEAECA", backgroundImage: " radial-gradient(circle,rgba(67, 147, 163, 1) 0%, rgba(148, 187, 233, 1) 100%)" }}>

                <div style={{ width: "50%", height: "800px", borderRadius: "10px", marginLeft: "25%", padding: "60px" ,backgroundColor:"white" ,padding:"20px"}}>

                    <h2 style={{ textAlign: "center", color: "green" }}>Farmer Registation</h2>

                  

                    <form onSubmit={submitData}>



                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }}>

                            <label htmlFor="exampleInputEmail1" className="form-label"> Email</label>

                            <input

                                type="email"

                                className="form-control"

                                id="exampleInputEmail1"

                                aria-describedby="emailHelp"

                                placeholder="Enter Email Address"

                                name="email"

                                value={regData.email}

                                onChange={fetchData}



                            />

                        </div>


                        <div className="mb-3" style={{ width: "70%", alignItems: "center", marginLeft: "90px" }}>

                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                            <input type="password" className="form-control" id="exampleInputPassword1"

                                placeholder="Password"

                                name="password"

                                value={regData.password}

                                onChange={fetchData} />

                        </div>







                        <div className="mb-3" style={{ width: "70%", alignItems: "center", marginLeft: "90px" }}>

                            <label htmlFor="Name" className="form-label"> Name</label>

                            <input type="text" className="form-control" id="firstName" placeholder="Enter Name" name="name"

                            value={regData.name}

                            onChange={fetchData}





                            />

                        </div>



                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }}>

                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>

                            <input

                                type="tel"

                                className="form-control"

                                id="phoneNumber"

                                placeholder="Enter Phone number"

                                pattern="[0-9]{10}"

                                maxLength="10"

                                required

                                name="phone"

                                value={regData.phone}

                                onChange={fetchData}

                            />
                        </div>

                        <div className="col-md-6" style={{ width: "70%", alignItems: "center", marginLeft: "90px" }}>

                            <label htmlFor="inputCity" className="form-label">City</label>

                            <input type="text" className="form-control" id="inputCity"

                                name="city"

                                value={regData.city}

                                onChange={fetchData} />



                        </div>



                        <div className="mb-3" style={{ width: "70%", alignItems: "center", marginLeft: "90px", marginTop: "10px" }}>

                            <label>Upload Pic</label>

                            <input type="file" className="form-control" aria-label="file example" required

                                name="file" 

                                onChange={fetchData}/>

                            <div className="invalid-feedback">Example invalid form file feedback</div>

                        </div>


                        <div className="mb-3" style={{ width: "70%", marginLeft: "90px" }}>

                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>

                            <textarea className="form-control"

                                id="exampleFormControlTextarea1" rows="3"

                                name="address"

                                placeholder="address"

                                value={regData.address}

                                onChange={fetchData}



                            > </textarea>



                        </div>



                        <button type="submit" className="btn btn-primary" style={{ marginLeft: "40%" }}>Submit</button>

                    </form>



                </div>



                <div style={{ width: "100%", height: "100px" }}></div>



            </div>

             <Footer/>

        </>

    )



}

export default FarmerRegistation