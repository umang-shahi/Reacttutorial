import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Pages/Contact/Contact";
import PageNotFound from "./components/Pages/Notfound/PageNotFound";
import Login from "./components/Pages/User/Login";
import Services from "./components/Pages/services/Services";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home/>} />


          <Route path="/about" element={<About />}/>

          <Route path="/login" element ={<Login/>}/>
            
          <Route path="/services" element={<Services/>} />

          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
