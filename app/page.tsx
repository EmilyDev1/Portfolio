import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/Scrollbutton";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      <Navbar />


      <div className="flex flex-col md:flex-row  min-h-[80vh] ">
        <Hero />
      </div>


      <section id="about" className="bg-[#e0f2fe] text-[#0f172a] w-full min-h-screen flex items-center px-6 py-20">

        <div className="max-w-7xl mx-auto px-4">
          {/* Centered Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] text-center mb-12">
            About Me
          </h2>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6 text-center md:text-left ">
              <p className="text-lg leading-relaxed ">
                Hello! I&apos;m <span className="font-semibold">Emily Machawira</span>, a passionate web developer with a BTech in Software Engineering based in Zimbabwe.
                I love crafting clean, user-focused digital experiences that blend <span className="font-semibold">functionality</span> and <span className="font-semibold">aesthetic design</span>.
                <br /><br />
                I specialize in responsive front-end development using <span className="text-[#0f172a] font-bold">React</span> and <span className="text-[#0f172a] font-bold">Tailwind CSS</span>, and I’m diving deep into full-stack technologies like <span className="font-bold">NestJS</span> and <span className="font-bold">React Native</span>.
              </p>
              <p className="italic text-sm text-gray-500">&quot;Building with love, designing with purpose.&quot;</p>
              <a
                href="/EmilyMachawira-Resume.pdf"
                download
                className="inline-block mt-4 px-6 py-3 bg-[#0f172a] text-white font-semibold rounded-lg shadow-md hover:bg-[#063668] transition"
              >
                Download CV
              </a>

            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 ">
              {[
                "HTML5", "CSS3", "Tailwind",
                "JavaScript", "React", "Next.js",
                "TypeScript", "Node.js", "NestJS",
                "React Native", "Git", "Figma",
                "PostgreSQL", "Redux", "Swagger"
              ].map((skill, idx) => (
                <div key={idx} className="bg-white shadow-md hover:shadow-xl transition-all rounded-xl p-4 text-center text-[#0f172a] font-semibold text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#0f172a] px-6 py-20 min-h-screen text-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#e0f2fe] mb-12">
            Projects
          </h2>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="bg-[#e0f2fe] p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">
                MariMusha App
              </h3>
              <p className="text-base mb-3">
                <b>MariMusha</b> is a smart mobile wallet that makes handling change and sending money easy, secure, and cashless.
                Just scan and receive your change or send funds instantly—no coins, no hassle. Designed for everyday use,
                MariMusha simplifies payments and empowers users with a modern, convenient way to manage small transactions and move toward a cashless future.

              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.mapepaprosper.marimushamobile&hl=en"
                className="text-[#0f172a] font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[#e0f2fe] p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">
                BuntuPay App
              </h3>
              <p className="text-base mb-3">
                <b>BuntuPay</b> is a blockchain-powered app redefining digital finance with fast, secure, and low-cost transactions.
                It enables peer-to-peer and cross-border transfers, real-time bill payments, and smart financial management tools—all with instant tracking and confirmations.
                Designed for accessibility and ease of use, BuntuPay removes traditional banking barriers,
                making finance inclusive, efficient, and user-friendly for everyone.

              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.buntuPay.Payment&hl=en"
                className="text-[#0f172a] font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>

            {/* <div className="bg-[#e0f2fe] p-6 rounded-xl shadow-md border  hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">
                R5Church App
              </h3>
              <p className="text-base mb-3">
                <b>R5Church</b> is a role-based application designed to serve the entire church community by providing access to sermons, events, and church news.
                It also allows members to share prayer requests and receive support from others,
                eliminating the barrier of physical distance.
              </p>
              <a
                href="#"
                className="text-[#0f172a] font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>

            <div className="bg-[#e0f2fe] p-6 rounded-xl shadow-md border  hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">
                Asset Manager
              </h3>
              <p className="text-base mb-3">
                A NestJS and Next.js system to manage company devices, employee access, and tech lifecycles.
              </p>
              <a
                href="#"
                className="text-[#0f172a] font-semibold hover:underline"
              >
                View Project →
              </a>
            </div> */}

            <div className="bg-[#e0f2fe] p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">
                Elms Rota Management App
              </h3>
              <p className="text-base mb-3">
                A <b>Rota and Leave Management </b> app that simplifies staff scheduling and time-off requests. 
                It helps organizations efficiently plan, manage, and allocate their workforce using a centralized platform.

              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.mapepaprosper.elmsrotamanagement&hl=en"
                className="text-[#0f172a] font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>

          </div>
        </div>
      </section>



      <section id="contact" className="bg-[#e0f2fe] min-h-screen text-black px-6 py-20 flex items-center">
  <div className="max-w-4xl mx-auto w-full">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#0f172a]">
      Lets Connect
    </h2>

    <p className="text-center text-lg max-w-2xl mx-auto mb-10">
      I&apos;m always open to discussing new opportunities, creative ideas, or ways I can help with your project.
      Whether you want to collaborate or just say hello — feel free to reach out!
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
      <a
        href="mailto:sheismunashe@gmail.com"
        className="px-6 py-3 bg-[#0f172a] text-white rounded-lg font-semibold shadow hover:bg-[#063668] transition flex items-center justify-center gap-2"
      >
        <FaEnvelope size={20} />
        Send Email 
      </a>
      <a
        href="https://wa.me/263771126984"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition flex items-center justify-center gap-2"
        
      >
        <FaWhatsapp size={20} />
       Message on WhatsApp
      </a>
    </div>

   
  </div>
</section>


      <ScrollToTopButton />
      <Footer />
    </main>
  );
}