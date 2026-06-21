import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    title: "Vadodara Hackathon 6.0",
    description:
      "Collaborated in a team environment to build EduShield, a disaster preparedness awareness platform. Worked under strict hackathon deadlines while focusing on responsive design and real-world problem solving.",
  },
  {
    year: "2025 - Present",
    title: "DSA & Problem Solving",
    description:
      "Solved 300+ coding problems across LeetCode and GeeksforGeeks, strengthening algorithmic thinking, data structures, debugging skills, and coding interview preparation.",
  },
  {
    year: "2026",
    title: "Full Stack Development",
    description:
      "Building modern applications using React, TypeScript, Tailwind CSS, Supabase, and scalable frontend architecture while creating production-style projects.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-20 py-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}

        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Experience & Learning
        </h2>

        <p className="text-gray-400 max-w-2xl mb-16">
          Key experiences, challenges, and milestones that have shaped my journey as a developer.
        </p>

        {/* Timeline */}

        <div className="relative border-l border-cyan-500/30 pl-8">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="mb-12 relative"
            >
              {/* Dot */}

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

              {/* Content Card */}

              <div
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                  hover:border-cyan-400/30
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                  transition-all
                  duration-300
                "
              >
                <span className="text-cyan-400 text-sm font-medium">
                  {item.year}
                </span>

                <h3 className="text-2xl font-semibold text-white mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}