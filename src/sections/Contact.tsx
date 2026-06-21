import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, GraduationCap } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
    .sendForm(
      "service_ma6zx3d",
      "template_yu97xu4",
      formRef.current,
      "2VKH1T-ZXFXSl7ceK"
    )
    .then(() => {
      alert("Message sent successfully!");
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message.");
    });
};
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-2"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <p className="text-gray-400 max-w-2xl mb-16">
          Open to internships, collaborations, hackathons and
          exciting opportunities in software development.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Side */}

          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>
                  <a
                    href="mailto:sujaljethwani18@gmail.com"
                    className="text-white hover:text-cyan-400 transition"
                 >
                   sujaljethwani18@gmail.com
                 </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>
                  <p className="text-white">
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <GraduationCap className="text-cyan-400" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Education
                  </p>
                  <p className="text-white">
                    B.Tech CSE • PIET
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-cyan-400 text-xl">💻</div>
                <div>
                  <p className="text-gray-400 text-sm">
                    Interests
                  </p>
                  <p className="text-white">
                    Full Stack Development & DSA
                  </p>
                </div>
              </div>

              <h4 className="text-white font-semibold mt-10 mb-4">
                Find Me Online
              </h4>
          
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Sujal-cloud"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-4 py-2
                      rounded-xl
                      bg-white/5
                      border border-white/10
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
                      bg-white/5
                      border border-white/10
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
          </div>

          {/* Right Side */}

          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Quick Message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="
                  w-full
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition-all
                  "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="
                  w-full
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition-all
                  "
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                className="
                  w-full
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  resize-none
                  focus:border-cyan-400
                  transition-all
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-cyan-500
                  text-black
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  "
                >
                Send Message
              </button>

            </form>
          </div>

        </div>

        

      </div>
    </section>
  );
}