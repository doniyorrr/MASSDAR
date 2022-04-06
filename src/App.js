import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button className="rounded-full bg-sky-500/50 py-2 px-4 m-5" onClick={notify}>Notify!</button>
      <ToastContainer />
      <h1>MASSDAR</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates iure ea ipsum veritatis sint animi dolor soluta. Magnam tempore quibusdam debitis accusamus tenetur impedit a cumque itaque possimus in!</p>
    </div>
  );
}

export default App;
