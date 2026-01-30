import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", target: "home" },
  { id: "menu", label: "Menu", target: "menu-section" },
  { id: "about", label: "About", target: "about" },
  { id: "contacts", label: "Contact", target: "contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const base = "transition font-body";
  const active = "text-[var(--sand)]";
  const inactive = "text-white hover:text-[var(--sand)]";

  const handleScroll = (targetId, id) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-xl">
      <div
        className="
        max-w-6xl mx-auto pl-4 pr-4 py-3
        flex items-center justify-between
        md:grid md:grid-cols-12
      "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            flex items-center gap-2
            md:col-start-2 md:col-end-4
          "
          onClick={() => handleScroll("home", "home")}
        >
          <img src="/logo4.png" alt="Eli's Table" className="w-14 h-14" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul
          className="
          hidden md:flex gap-8 font-extralight text-2xl
          md:col-start-5 md:col-end-12 md:justify-end
        "
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`${base} ${
                  activeSection === item.id ? active : inactive
                }`}
                onClick={() => handleScroll(item.target, item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE BURGER */}
        <button
          className="md:hidden text-[var(--terracotta)] p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <ul className="md:hidden bg-black/80 flex flex-col items-center gap-4 py-4 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`${base} text-xl ${
                  activeSection === item.id ? active : inactive
                }`}
                onClick={() => handleScroll(item.target, item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
