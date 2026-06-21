export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}

          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sujal.dev
            </h3>

            <p className="text-gray-400 mt-3 max-w-md">
              Passionate about building scalable web applications,
              mastering Data Structures & Algorithms, and creating
              impactful digital experiences.
            </p>
          </div>

          {/* Right */}

          <div className="flex gap-4">

            <a
              href="https://github.com/Sujal-cloud"
              target="_blank"
              rel="noreferrer"
              className="
                px-4 py-2
                rounded-xl
                border border-white/10
                bg-white/5
                hover:border-cyan-400/50
                hover:text-cyan-400
                transition-all
                duration-300
              "
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sujal-jethwani-864974338"
              target="_blank"
              rel="noreferrer"
              className="
                px-4 py-2
                rounded-xl
                border border-white/10
                bg-white/5
                hover:border-cyan-400/50
                hover:text-cyan-400
                transition-all
                duration-300
              "
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-gray-500 text-sm">
          © 2026 Sujal Jethwani. All rights reserved.
        </div>

      </div>

    </footer>
  );
}