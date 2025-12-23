import { Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import HeroBanner from "./Components/HeroBanner";
import Navbar from "./Pages/Navbar";
// import Virat from "./Components/Navbar"
import Homepage from "./Pages/Homepage";

import ProductDetails from "./Pages/ProductDetails.json";

import About from "./Pages/About";
import Services from "./Pages/Services";
import PageNotFound from "./Pages/PageNotFound";
import Product from "./Pages/Product";

function App() {
  let name="Virat Kohli";



  function Clickbutton(){
    alert("HEY U CLICKED THE BUTTON");
  }



  return (
    <>
      {/* <HeroBanner /> */}

      <Navbar prop1={name} age={25} eligibility={false}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage buttonevent={Clickbutton} name={"Dhoni"} />} />
        <Route path="/about" element={<About prop2="props concept example"/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product product={ProductDetails}/>} />
        <Route path="*" element={<PageNotFound />}>
          <Route path=":id" element={<PageNotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
