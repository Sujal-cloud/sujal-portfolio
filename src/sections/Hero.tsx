import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiCplusplus,
} from "react-icons/si";

import { HiCodeBracket } from "react-icons/hi2";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-600 blur-[120px] opacity-30" />

        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500 blur-[120px] opacity-30" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex lg:hidden justify-center mb-8">
          <div
            className="
              w-40 h-40
              rounded-full
              overflow-hidden
              border-4
              border-cyan-400/30
              shadow-[0_0_40px_rgba(34,211,238,0.3)]
            "
          >
            <img
              src="/avatar.png"
              alt="Developer Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
          {/* LEFT */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-cyan-400 text-sm tracking-[0.3em] font-semibold uppercase"
            >
              HELLO THERE 👋
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                        heading-font
                        text-5xl md:text-7xl xl:text-8xl
                        font-bold
                        leading-[0.9]
                        bg-gradient-to-r
                        from-white
                        via-purple-300
                        to-cyan-300
                        bg-clip-text
                        text-transparent
                        "
            >
            SUJAL
            <br />
            JETHWANI
            </motion.h1>

            <div className="mt-6 h-12 min-w-[320px]">

                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "DSA Enthusiast",
                    2000,
                    "Open Source Learner",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl font-medium text-cyan-300"
            />

        </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-gray-400 max-w-md leading-8 text-lg"
            >
              Passionate about building modern web applications,
              solving complex problems, and transforming ideas
              into real-world products.
            </motion.p>
                
            <div className="flex gap-10 mt-8">

                <div>
                  <h3 className="text-2xl font-bold text-cyan-300">
                    300+
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Problems Solved
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-cyan-300">
                    8.83
                  </h3>
                  <p className="text-gray-400 text-sm">
                    CGPA
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-cyan-300">
                    3+
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Projects
                  </p>
                </div>

            </div>
            
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="
                px-6 py-3 rounded-xl
                bg-cyan-500 text-black
                font-semibold
                hover:scale-105
                transition
                "
              >
              View Projects
              </a>

              <button className="px-6 py-3 rounded-xl border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                   Resume
                </a>
              </button>

              <a
                href="https://github.com/Sujal-cloud"
                target="_blank"
                rel="noreferrer"
                className="
                px-6 py-3 rounded-xl
                border border-cyan-400/30
                text-cyan-300
                hover:bg-cyan-400/10
                transition
                "
              >
                GitHub
              </a>

                <a
                href="https://www.linkedin.com/in/sujal-jethwani-864974338"
                target="_blank"
                rel="noreferrer"
                className="
                px-6 py-3 rounded-xl
                border border-cyan-400/30
                text-cyan-300
                hover:bg-cyan-400/10
                transition
                "
              >
                LinkedIn
              </a>

            </div>

          </div>


      {/* RIGHT */}
<div className="hidden lg:flex justify-center items-center">

  <div className="orbit-container">

    {/* Glow */}
    <div className="absolute inset-10 rounded-full bg-cyan-500/10 blur-3xl" />

    {/* Orbit Ring */}
    <div className="orbit-ring">

      <div
        className="orbit-item"
        style={{
          transform: "rotate(0deg) translateY(-230px)",
        }}
      >
        <div className="skill-orbit">
          <SiCplusplus size={28} />
        </div>
      </div>

      <div
        className="orbit-item"
        style={{
          transform: "rotate(60deg) translateY(-230px)",
        }}
      >
        <div className="skill-orbit">
          <FaJava size={28} />
        </div>
      </div>

      <div
        className="orbit-item"
        style={{
          transform: "rotate(120deg) translateY(-230px)",
        }}
      >
        <div className="skill-orbit">
          <FaPython size={28} />
        </div>
      </div>

      <div
        className="orbit-item"
        style={{
          transform: "rotate(180deg) translateY(-230px)",
        }}
      >
        <div className="skill-orbit">
          <HiCodeBracket size={28} />
        </div>
      </div>

      <div
        className="orbit-item"
        style={{
          transform: "rotate(240deg) translateY(-230px)",
        }}
      >
        <div className="skill-orbit">
          <FaReact size={28} />
        </div>
      </div>

      <div
        className="orbit-item"
        style={{
          transform: "rotate(300deg) translateY(-230px)",
        }}
      >
        <div className="skill-orbit">
          <FaNodeJs size={28} />
        </div>
      </div>

    </div>

    {/* Center Avatar */}
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-20
      "
    >
      <div
        className="
          w-80
          h-80
          rounded-full
          overflow-hidden
          border-4
          border-cyan-400/30
          shadow-[0_0_80px_rgba(34,211,238,0.35)]
        "
      >
        <img
          src="/avatar.png"
          alt="Developer Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

  </div>

</div>


    
        </div>

      </div>
            

    </section>
  );
}