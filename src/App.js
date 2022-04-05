import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button className="rounded-full bg-sky-500/50 py-2 px-4 m-5" onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
