import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home/home.jsx";
import About from "./assets/About/about.jsx";
import Navbar from "./assets/Navbar/navbar.jsx";
import Footer from "./assets/Footer/footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
