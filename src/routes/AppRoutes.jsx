import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "../components/layout/navbar/NavBar.jsx"
import Home from "../pages/Home.jsx"
import AboutUs from "../pages/AboutUs.jsx"
import ContactUs from "../pages/ContactUs.jsx"
import Courses from "../pages/Courses.jsx"
import Faq from "../pages/Faq.jsx"
import Footer from "../components/layout/Footer.jsx"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">

        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
          <NavBar />
        </div>

        <main className="mt-20 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default AppRoutes