import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import Layout from "./Layout.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>}/>
      </Routes>
    <Layout/>

    </>
  );
}

export default App;
