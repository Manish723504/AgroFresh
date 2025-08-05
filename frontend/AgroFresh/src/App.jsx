import Carousel from "./Component/Carousel"
import Footer from "./Component/Footer"
import Header from "./Component/Header"

function App() {


  return (     //return is UI

    <>

      

      <Header/>
      <Carousel />
     <div style={{ fontFamily:"new-roman",textIndent:"10px",letterSpacing:"3px",width:"60%",marginLeft:"100px"}}> <p>From industry leading post-harvest quality and freshness solutions to digital technology
        platforms that answer your unique challenges, we’re 100% focused on what fresh means to you.
        As the pioneers behind the introduction of 1-MCP for ethylene management, as well as Uvasys,
        the world’s first laminated SO2 generating sheets product, we deliver answers at every step of
        the supply chain to help your produce—and your business—get where it needs to go.</p>
        </div>
        <button type="button" class="btn btn-success" style={{ marginLeft: "400px" }}>Learn More</button>
        <Footer/>

    </>
  )

}


export default App
