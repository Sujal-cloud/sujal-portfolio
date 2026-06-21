import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started B.Tech",
    description:
      "Began my Computer Science journey at Parul Institute of Engineering & Technology.",
  },
  {
    year: "2024",
    title: "Learned C & Python",
    description:
      "Built programming fundamentals and developed problem-solving skills.",
  },
  {
    year: "2025",
    title: "Started DSA",
    description:
      "Started solving coding problems and learning Data Structures & Algorithms.",
  },
  {
    year: "2025",
    title: "Consistency Challenges",
    description:
      "Faced setbacks and learned the importance of discipline and consistency.",
  },
  {
    year: "2026",
    title: "Building Full Stack Projects",
    description:
      "Creating modern web applications using React, TypeScript, Tailwind and backend technologies.",
  },
  {
    year: "Future",
    title: "Startup Vision",
    description:
      "Dreaming of building impactful products and launching a successful startup.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-20 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Journey
        </h2>

        <p className="text-gray-400 max-w-2xl mb-16">
          From writing my first lines of code to building
          full stack applications and solving DSA problems.
        </p>

        {/* Two Columns */}

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16">

          {/* LEFT SIDE TIMELINE */}

          <div className="relative border-l border-cyan-500/30 pl-8">

            {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="mb-10 relative"
                >
                <div
                    className="
                      absolute
                      -left-[41px]
                      top-2
                      h-4
                      w-4
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_20px_rgba(34,211,238,0.8)]
                    "
                />

                <span className="text-cyan-400 text-sm">
                  {item.year}
                </span>

                <h3 className="text-xl font-semibold text-white mt-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>

          {/* RIGHT SIDE CARD */}

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  h-fit
                  hover:border-cyan-400/30
                  transition-all
                  duration-300
                "
            >
            <h3 className="text-2xl font-bold text-white">
              Who Am I?
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              I'm Sujal Jethwani, a Computer Science student
              passionate about software development,
              problem solving, and building products that
              create real-world impact.

              My journey started with C and Python,
              evolved through DSA, and now focuses on
              full stack development.
            </p>

            <div className="mt-8 space-y-4">

              <div
                className="
                  bg-white/5
                  rounded-2xl
                  p-4
                  border
                  border-white/10
                  hover:border-cyan-400/40
                  hover:translate-x-2
                  transition-all
                  duration-300
                "
              >
                DSA & Problem Solving
              </div>

              <div
                className="
                  bg-white/5
                  rounded-2xl
                  p-4
                  border
                  border-white/10
                  hover:border-cyan-400/40
                  hover:translate-x-2
                  transition-all
                  duration-300
                "
              >
                Full Stack Development
              </div>

              <div
                className="
                  bg-white/5
                  rounded-2xl
                  p-4
                  border
                  border-white/10
                  hover:border-cyan-400/40
                  hover:translate-x-2
                  transition-all
                  duration-300
                "
              >
                Placement Preparation
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Future Vision 🚀
                </h4>

                <p className="text-gray-400 leading-relaxed">
                  My goal is to become a skilled software engineer,
                  gain industry experience, and eventually build
                  impactful technology products through my own startup.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}