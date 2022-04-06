import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <Navbar/>
      <Sidebar/>
     

      <Footer/>
    </>
  );
}

export default App;
