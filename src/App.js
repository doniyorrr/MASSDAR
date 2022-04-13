import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Addproduct from "./components/omborlar/AddProduct";
import Allproduct from "./components/omborlar/AllProduct";
import Omborlar from "./components/omborlar/Omborlar";
import Sidebar from "./components/Sidebar";


function App() {

  const [value , setValue] = useState([])

  useEffect(()=> {
    axios.get("http://127.0.0.1:8000/api/product/")
    .then(res => setValue(res.data))
    .catch(err => console.log(err))
    
  } , [])


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
          <Route path="/allProducts" element={<Allproduct product={value}/>} />
          <Route path="/omborlar" element={<Omborlar />} />
        </Routes>
      </div>

      {/* <Navbar/> */}
      {/* <Demo/> */}

      {/* <Footer/> */}
    </>
  );
}

export default App;
