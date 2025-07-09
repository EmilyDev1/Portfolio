import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto py-20">
            <div className="flex-1 text-left md:pr-38 order-2 md:order-1 ">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">Emily Machawira</h1>
                <div className="h-1 w-24 bg-pink-500 mb-6"></div>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                    Creative developer passionate about building beautiful and functional web experiences.
                </p>
                <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
                    Get in touch
                </button>
            </div>

            <div className="flex-1 order-1 md:order-2 mb-12 md:mb-0">
                <div className="relative w-80 h-96 md:w-[28rem] md:h-[32rem] mx-auto">
                    <Image
                        src="/emily.png"
                        alt="Profile"
                        width={900}
                        height={900}
                        className="rounded-full object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}