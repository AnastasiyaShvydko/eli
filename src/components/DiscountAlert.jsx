import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function DiscountPopup() {
  const [open, setOpen] = useState(false);

  // Show popup after 1 second
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed left-1/2 
        transform -translate-x-1/2
        w-[100%] max-w-xl
        bg-white shadow-xl  p-4 
        flex items-center gap-3 z-[9999]
        transition-all duration-500 ease-out
        top-[20%]

    ${open ? "translate-y-0" : "translate-y-[260%]"}
      `}
    >
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute right-3 top-3 text-gray-600 hover:text-red-600 transition"
      >
        <X size={30} />
      </button>

      <div>
        <img
        src="/eli-banner2.png"
        alt="Eli's Table - Authentic Mediterranean Taste"
        className="w-full h-auto shadow-xl"
      />
      </div>
    </div>
  );
}
