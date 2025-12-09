export default function HeroButton() {
  return (
    <section id="home" className="relative w-full h-[100vh] overflow-hidden ">
      
     

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-cinzel
         mb-4">
          Authentic Mediterranean Taste
        </h1>
        <p className="max-w-xl text-lg md:text-xl mb-8">
          Fresh ingredients. Family recipes. Local flavour.
        </p>
        {/* <a
          href="/menu"
          className="bg-[var(--pomegranate)] hover:bg-amber-700 px-6 py-3 rounded-lg text-white font-semibold transition"
        >
          View Menu
        </a> */}
        <div className="container">
    <div className="center">
      <button className="btn-menu"   onClick={() => {
    const section = document.getElementById("menu-section");
    section?.scrollIntoView({ behavior: "smooth" });
  }} >
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>Show Menu</span>
      </button>
    </div>
  </div>
      </div>
    </section>
  );
}
