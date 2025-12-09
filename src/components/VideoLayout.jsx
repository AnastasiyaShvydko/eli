// VideoLayout.jsx
import { useEffect, useState } from "react";
import HeroButton from "./HeroButton.jsx";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import About from "./About.jsx";


export default function VideoLayout({ children }) {
 const videos = [
    
    "/videos/eli-hero2.mp4",
    "/videos/eli-hero3.mp4",
    
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 8000); // change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white">

      {/* ВИДЕО – фиксированный фон (parallax) */}
      <video
      key={videos[index]}
        autoPlay
        muted
        loop
        playsInline
        className="
          fixed inset-0
          w-full h-full
          object-cover
          -z-20
        "
      >
        <source src={videos[index]} type="video/mp4" />
      </video>

      {/* Тёмный overlay для читабельности текста */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      {/* Навбар + контент поверх */}
      <Navbar />
      <main className="relative z-10">
        {children}
        <HeroButton />
        <Menu />
         <div className="relative z-10">
          <About />
        <Footer />
      </div>
      </main>
    </div>
  );
}




