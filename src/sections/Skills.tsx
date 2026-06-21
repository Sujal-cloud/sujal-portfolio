import { motion } from "framer-motion";
import { Code2, Database, Laptop, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Laptop,
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "Supabase", "MongoDB"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-20 py-32"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 max-w-2xl mb-16">
          Technologies and tools I use to build modern applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                hover:border-cyan-400/30
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
            "
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                     px-4 py-2
                     rounded-xl
                     bg-cyan-500/10
                     border border-cyan-500/20
                     text-cyan-300
                     hover:bg-cyan-500/20
                     hover:scale-105
                     transition-all
                     duration-300
                     cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}