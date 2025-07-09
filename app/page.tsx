import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
     
      <Navbar />

     
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-6 bg-white">
        <Hero />
      </div>

      
      <section id="about" className="bg-pink-50 px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">About Me</h2>
           <p className="text-lg ">
            Hello! I am <span className="font-semibold">Emily </span>, a passionate web developer based in Zimbabwe.
            I love creating beautiful and user-friendly experiences with clean, accessible code.
             My journey in web development has been driven by a love for design and technology, and I strive to create
            user-friendly interfaces that leave a lasting impression.
            I am currently exploring full-stack development, with a special interest in React Native and secure backend systems.
          </p>
        </div>
      </section>

      
      <section id="projects" className="bg-white px-6 py-16 text-black">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
     
      <div className="bg-pink-50 p-6 rounded-xl shadow-md border border-pink-200 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-pink-700 mb-2">
          MariMusha App
        </h3>
        <p className="text-base mb-3">
          A cross-platform mobile app for digital payments and peer-to-peer transactions using Stellar and Twilio.
        </p>
        <a
          href="#"
          className="text-pink-600 font-semibold hover:underline"
        >
          View Project →
        </a>
      </div>

      {/* Project Card 2 */}
      <div className="bg-pink-5
      0 p-6 rounded-xl shadow-md border border-pink-200 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-pink-700 mb-2">
          Asset Manager
        </h3>
        <p className="text-base mb-3">
          A NestJS and Next.js system to manage company devices, employee access, and tech lifecycles.
        </p>
        <a
          href="#"
          className="text-pink-600 font-semibold hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  </div>
</section>


    
      <section id="contact" className="bg-pink-50 text-black px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-pink-600">Let us Connect</h2>
          <p className="mb-6 text-lg">
            Interested in working together or just want to say hello? I would love to hear from you.
          </p>
        
        </div>
      </section>

      
      <Footer />
    </main>
  );
}