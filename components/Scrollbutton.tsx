import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  return (
    <a
      href="#"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 bg-[#063668] text-white p-3 rounded-full shadow-lg hover:bg-[#58A0C8] transition-all duration-300 hover:scale-110 animate-bounce"
    >
      <FaArrowUp size={20} />
    </a>
  );
}
