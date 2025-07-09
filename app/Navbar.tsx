import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 flex justify-between items-center p-6 bg-black px-12">
            <h1 className="text-2xl font-bold text-pink-600">EM.</h1>
            <ul className="flex space-x-16 text-lg">
                <li><Link href="/" className="text-white hover:text-pink-600 font-bold transition-colors">Home</Link></li>
                <li><a href="#about" className="text-white hover:text-pink-600 font-bold transition-colors">About me</a></li>
                 <li><a href="#projects" className="text-white hover:text-pink-600 font-bold transition-colors">Projects</a></li>
                 <li><a href="#contact" className="text-white hover:text-pink-600 font-bold transition-colors">Contact</a></li>
            </ul>
        </nav>
    );
}