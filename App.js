import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import Home from "./pages/Home";
import Apointment from './components/Apointment';
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Diet from "./pages/Diet"; // تأكد من أنك قد أنشأت هذه الصفحة
import Activities from "./pages/Activities"; // تأكد من أنك قد أنشأت هذه الصفحة
import Mother from "./pages/Mother"; // تأكد من أنك قد أنشأت هذه الصفحة

import Contact from "./components/Contact/Contact"; // تأكد من أنك قد أنشأت هذه الصفحة



const App = () => {
  return (
    <Router>
      {/* عرض الشريط العلوي (Navbar) على كل الصفحات */}
      <Navbars />
      {/* تعريف المسارات */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Apointment />} />
        <Route path="/doctor" element={<Doctors />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/mother" element={<Mother />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
