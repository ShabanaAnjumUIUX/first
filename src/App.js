import { Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import HeroBanner from "./Components/HeroBanner";
import Navbar from "./Pages/Navbar";
// import Virat from "./Components/Navbar"
import Homepage from "./Pages/Homepage";

import About from "./Pages/About";
import Services from "./Pages/Services";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      {/* <HeroBanner /> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<PageNotFound />}>
          <Route path=":id" element={<PageNotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
