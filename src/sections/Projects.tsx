// import { motion } from "framer-motion";

// import { Github } from "lucide-react";

import travelLoopImage from "../assets/traveloop-login.png";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mb-16">
          A collection of projects showcasing my development journey.
        </p>

        {/* TravelLoop */}
        <div className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-300">
          {/* Left Side */}
          <div>
            <span className="text-cyan-400 text-sm">FEATURED PROJECT</span>

            <div className="mt-3">
              <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Hackathon Team Project
              </span>
            </div>

            <h3 className="text-4xl font-bold text-white mt-4">Traveloop</h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A hackathon team project focused on travel planning and itinerary management. Contributed to frontend development, responsive UI implementation, authentication screens, and user experience design using React, TypeScript, and Tailwind CSS.

            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-300">React</span>
              <span className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-300">TypeScript</span>
              <span className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-300">Tailwind</span>
              <span className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-300">Vite</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-8 text-gray-300">
              <div>✓ Trip Management</div>
              <div>✓ Itinerary Planning</div>
              <div>✓ Budget Tracking</div>
              <div>✓ Packing Checklist</div>
              <div>✓ Travel Notes</div>
              <div>✓ Community Features</div>
            </div>

            <a
              href="https://github.com/parthsudani-7/TravelLoop"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
            >
              View GitHub
            </a>
          </div>

          {/* Right Side */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={travelLoopImage}
              alt="TravelLoop"
              className="rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition-all duration-500 brightness-110"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">

        {/* UrbanCart */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            hover:border-cyan-400/30
            transition-all
            duration-300
          "
        >
          <span className="text-cyan-400 text-sm">
            E-COMMERCE PROJECT
          </span>

          <h3 className="text-2xl font-bold text-white mt-3">
            UrbanCart
          </h3>

          <span
            className="
              px-3 py-1
              rounded-full
              text-xs
              font-medium
              bg-yellow-500/10
              text-yellow-300
              border
              border-yellow-500/20
            "
            >       
              🚧 In Development
            </span>
          <p className="text-gray-400 mt-4">
            Modern e-commerce platform built with
            React, TypeScript and Supabase,
            featuring authentication, product listings
            and responsive UI.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300">
              React
            </span>

            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300">
              TypeScript
            </span>

            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300">
              Supabase
            </span>
          </div>
        </div>

         {/* URL Detector */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            hover:border-cyan-400/30
            transition-all
            duration-300
          "
        >
          <span className="text-cyan-400 text-sm">
            SECURITY PROJECT
          </span>

          <h3 className="text-2xl font-bold text-white mt-3">
            Suspicious URL Detector
          </h3>

          <p className="text-gray-400 mt-4">
            Flask-based phishing URL detection tool
            that analyzes links using rule-based
            techniques and provides security insights.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300">
              Python
            </span>

            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300">
              Flask
            </span>

            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300">
              Security
            </span>
          </div>
          <a
            href="https://github.com/Sujal-cloud/suspicious-url-detector"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-6
              px-5
              py-2
              rounded-xl
              bg-cyan-500
              text-black
              font-semibold
            "
          >
            View GitHub
          </a>
        </div>

        </div>

      </div>
    </section>
  );
}