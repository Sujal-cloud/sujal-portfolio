import nptel from "../assets/certificates/nptel.png";
import javascript from "../assets/certificates/javascript.png";
import htmlcss from "../assets/certificates/htmlcss.png";
import python from "../assets/certificates/python.png";

export default function Achievements() {
  const stats = [
    {
      value: "300+",
      label: "Problems Solved",
    },
    {
      value: "8.83",
      label: "CGPA",
    },
    {
      value: "4+",
      label: "Projects Built",
    },
    {
      value: "5",
      label: "Certifications",
    },
    {
      value: "2028",
      label: "Graduation",
    },
    {
      value: "3",
      label: "Hackathons",
    },
  ];

  const certificates = [
    {
      title: "NPTEL Computer Networks",
      issuer: "IIT Kharagpur",
      badge: "Elite",
      image: nptel,
    },
    {
      title: "JavaScript Specialist",
      issuer: "Pearson VUE",
      badge: "IT Specialist",
      image: javascript,
    },
    {
      title: "HTML & CSS Specialist",
      issuer: "Pearson VUE",
      badge: "IT Specialist",
      image: htmlcss,
    },
    {
      title: "IBM Python",
      issuer: "IBM Skills Network",
      badge: "Python",
      image: python,
    },
  ];

  return (
    <section
      id="achievements"
      className="px-6 md:px-20 py-32"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}

        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>

        <p className="text-gray-400 max-w-2xl mb-16">
          Milestones that reflect my academic performance,
          technical growth and continuous learning.
        </p>

        {/* Achievement Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
                hover:border-cyan-400/30
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-3 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}

        <h3 className="text-3xl font-bold text-white mb-10">
           Certifications & Credentials
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
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
                min-h-[220px]
              "
            >
              <span
                className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  bg-cyan-500/10
                  text-cyan-300
                  border border-cyan-500/20
                "
              >
                {certificate.badge}
              </span>

              <h4 className="text-2xl font-semibold text-white mt-5">
                {certificate.title}
              </h4>

              <p className="text-gray-400 mt-2">
                {certificate.issuer}
              </p>

              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-6
                  inline-block
                  text-cyan-400
                  font-medium
                  hover:text-cyan-300
                  transition
                "
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>

        {/* Additional Certificate */}

        <div className="mt-8">
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-white/5
              border border-white/10
              text-gray-300
            "
          >
            + Deloitte Technology Job Simulation
          </span>
        </div>

      </div>
    </section>
  );
}