
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--cream)] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Контактная форма */}
        <div id="contacts">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-md bg-[#2a2a28] text-[var(--cream)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md bg-[#2a2a28] text-[var(--cream)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
            />
            <textarea
              rows="3"
              placeholder="Message"
              className="w-full px-3 py-2 rounded-md bg-[#2a2a28] text-[var(--cream)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-md bg-[var(--terracotta)] text-[var(--cream)] font-medium hover:bg-[var(--pomegranate)] transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Навигация */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[var(--terracotta)] transition">Home</Link></li>
            <li><Link to="/menu" className="hover:text-[var(--terracotta)] transition">Menu</Link></li>
            <li><Link to="/about" className="hover:text-[var(--terracotta)] transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--terracotta)] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Контакты + соцсети */}
        <div>
  <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
  <div className="space-y-2 text-sm mb-4">
    <p className="flex items-start gap-2">
      <MapPin size={16} className="mt-0.5" />
      <span>123-9421 Jane St, Maple ON L6A4H8 </span>
    </p>
    <p className="flex items-center gap-2">
      <Phone size={16} />
      <a href="tel:+16476166560" className="hover:text-[var(--terracotta)] transition">
        +1 (647) 616-6560
      </a>
    </p>
    <p className="flex items-center gap-2">
      <Mail size={16} />
      <a href="mailto:info@elistable.ca" className="hover:text-[var(--terracotta)] transition">
        info@elistable.ca
      </a>
    </p>
  </div>

  {/* MAP */}
  <div className="w-full h-40 md:h-48 rounded-lg overflow-hidden border border-[#363632]">
    <iframe
      title="Eli's Table Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.932415397365!2d-79.53576152428198!3d43.83649927109396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f36db8cb65d%3A0x468916ea484ed744!2s9421%20Jane%20St%20Unit%20123%2C%20Maple%2C%20ON%20L6A%204H8!5e0!3m2!1sen!2sca!4v1763484385217!5m2!1sen!2sca"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div className="mt-4">
    <h4 className="text-sm font-semibold mb-2">Follow us</h4>
    <div className="flex gap-4 text-sm">
      <a href="#" className="hover:text-[var(--terracotta)] transition">Instagram</a>
      <a href="#" className="hover:text-[var(--terracotta)] transition">Facebook</a>
      <a href="#" className="hover:text-[var(--terracotta)] transition">TikTok</a>
    </div>
  </div>
</div>

      </div>

      <div className="border-t border-[#363632] py-4 text-xs text-center text-gray-400">
        © {new Date().getFullYear()} Eli’s Table. All rights reserved.
      </div>
    </footer>
  );
}
