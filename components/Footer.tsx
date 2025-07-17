import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bottom-0 bg-[#0f172a] text-[#e0f2fe] px-6 py-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Emily Machawira - All rights reserved</p>
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/emily-machawira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-[#38bdf8] transition" />
          </a>
          <a
            href="https://github.com/EmilyDev1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-[#38bdf8] transition" />
          </a>
          <a
            href="https://wa.me/263771126984" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-[#38bdf8] transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
