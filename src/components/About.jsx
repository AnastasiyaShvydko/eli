export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-20 flex justify-center"
    >
      <div className="
        max-w-6xl mx-auto 
        bg-white/70 backdrop-blur-sm
        shadow-lg rounded-xl 
        p-8 md:p-12
        text-[var(--charcoal)] 
        font-[var(--body)]
      ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE SIDE */}
          <div className="relative">
            <img
              src="/chefs.jpg"
              alt="Eli's Table Mediterranean Cuisine"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--sand)]/60 rounded-xl -z-10"></div>
          </div>

          {/* TEXT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-[var(--fancy)] mb-4">
              About Eli’s Table
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              At Eli’s Table, we bring authentic Mediterranean flavors to your
              plate — fresh, homemade, and prepared with passion. Our family-owned
              kitchen combines traditional recipes with a warm and welcoming
              atmosphere.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              From juicy shawarma and charcoal-grilled platters to homemade dips,
              salads, and refreshing drinks, our goal is to serve meals that feel
              both comforting and unforgettable.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Whether you're joining us for a quick bite or a family dinner,
              we’re dedicated to offering the highest quality ingredients and a
              true Mediterranean hospitality experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
