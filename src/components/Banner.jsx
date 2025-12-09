import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Banner() {
  const [show, setShow] = useState(true);

  // show on initial load
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-[var(--pomegranate)] text-[var(--cream)] py-3 px-4 z-[60] flex items-center justify-between shadow-md">
      <p className="text-center w-full font-body text-lg">
        🎉 Special Discount Today! Buy 2 Shawarmas, Get 1 Free!
      </p>

      <button
        onClick={() => setShow(false)}
        className="absolute right-4 text-[var(--cream)] hover:opacity-70 transition"
      >
        <X size={22} />
      </button>
    </div>
  );
}
