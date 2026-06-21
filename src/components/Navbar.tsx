export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-3">

        <div
          className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-6
          py-3
        "
        >

          <h2 className="heading-font text-xl font-bold">
            Sujal.dev
          </h2>

          <nav className="hidden md:flex gap-8 text-gray-300">
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>

          </nav>

        </div>

      </div>

    </header>
  );
}