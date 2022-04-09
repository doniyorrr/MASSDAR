// import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Demo from "./components/demo";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Addproduct from "./components/omborlar/AddProduct";
import Sidebar from "./components/Sidebar";

function App() {

  const [inActive , setInActive] = useState(false)

  return (
    <>
      <Sidebar 
        onCollapse={(inactive)=>{
          console.log(inactive)
          setInActive(inactive)
        }}
      
      />
      <div className={`section ${inActive ? "inactive" : ""}`}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/kirim" element={<Addproduct />} />
        </Routes>
      </div>

      {/* <Navbar/> */}
      {/* <Demo/> */}

      {/* <Footer/> */}
    </>
  );
}

export default App;
