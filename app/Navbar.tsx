import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed w-full flex justify-between items-center p-6 bg-[#0f172a]/60 px-12 z-50">
            <Link href="/" className="text-2xl font-bold text-[#58A0C8]">
            EM.
            </Link>
            <ul className="flex space-x-16 text-lg">
                <li><Link href="/" className="text-[#e0f2fe] hover:text-[#58A0C8] font-bold transition-colors">Home</Link></li>
                <li><a href="#about" className="text-[#e0f2fe] hover:text-[#58A0C8] font-bold transition-colors">About me</a></li>
                 <li><a href="#projects" className="text-[#e0f2fe] hover:text-[#58A0C8] font-bold transition-colors">Projects</a></li>
                 <li><a href="#contact" className="text-[#e0f2fe] hover:text-[#58A0C8] font-bold transition-colors">Contact</a></li>
            </ul>
        </nav>
    );
}