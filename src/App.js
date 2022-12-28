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
import UpdateProfile from "./components/Pages/User/updateProfile/UpdateProfile";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";
import Admin from "./components/admin/Admin";



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

          <Route path="/profile" element={<ProtectedRoute>
            <Profile/>
          </ProtectedRoute>}/>
          <Route path="/profile/update" element={<ProtectedRoute>
            <UpdateProfile/>
          </ProtectedRoute>}/>

          <Route path="/admin/dashboard" element={<ProtectedRoute>
            <Admin />
          </ProtectedRoute>}
          />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
