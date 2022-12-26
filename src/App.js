import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Pages/Contact/Contact";
import PageNotFound from "./components/Pages/Notfound/PageNotFound";
import Services from "./components/Pages/services/Services";
import Register from "./components/Pages/User/Register";
import { ToastContainer } from 'react-toastify';
import Login from "./components/Pages/User/login/Login";
import Profile from "./components/Pages/User/profile/Profile";



function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer position ="bottom-right" />
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home/>} />


          <Route path="/about" element={<About />}/>

            
          <Route path="/services" element={<Services/>} />

          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<PageNotFound />} />

          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
