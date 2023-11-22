import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
