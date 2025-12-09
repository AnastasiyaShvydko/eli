// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/NavBar.jsx";
// import Banner from "./components/Banner.jsx";
// import DiscountAlert from "./components/DiscountAlert.jsx";

// import './App.css'
// import HeroVideo from './components/HeroVideo.jsx';

// function App() {
  

//   return (
//    <BrowserRouter>
//     <DiscountAlert />
//       <Navbar />
//       <HeroVideo/>
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes> */}
//       {/* <Footer /> */}
//     </BrowserRouter>
//   )
// }

// export default App

// App.jsx
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoLayout from "./components/VideoLayout";
import HeroButton from './components/HeroButton';
import Footer from './components/Footer';
import { Disc } from 'lucide-react';
import DiscountAlert from './components/DiscountAlert';
//import Home from "./pages/Home";

export default function App() {
  return (
    <VideoLayout>
      <DiscountAlert />
      {/* <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-[var(--fancy)] mb-4">Eli’s Table</h1>
          <p className="text-xl font-[var(--body)]">
            Authentic Mediterranean Taste
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-transparent">
       
      </section>
      <HeroButton /> */}
      
    </VideoLayout>
  );
}
