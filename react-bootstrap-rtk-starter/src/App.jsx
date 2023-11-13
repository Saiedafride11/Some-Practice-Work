import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./assets/shared/Footer/Footer";
import Header from "./assets/shared/Header/Header";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="py-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
