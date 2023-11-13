import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./assets/shared/Footer/Footer";
import Header from "./assets/shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
