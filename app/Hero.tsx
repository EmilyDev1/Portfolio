import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full  overflow-hidden bg-[#0f172a]">
            {/* Hero Background */}
            <div className="w-full  h-[40vh] relative">
                <Image
                    src="/banner.jpg" // Replace with your banner image
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Profile Content */}
            <div className="flex flex-col  items-left -mt-16 px-18 text-center relative md:text-right">
                {/* Profile Image */}
                <div className="w-64 h-64 rounded-full overflow-hidden border-6 border-[#e0f2fe] shadow-md">
                    <Image
                        src="/emily.png" // Replace with your profile image
                        alt="Emily Machawira"
                        width={256}
                        height={256}
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="flex flex-col items-center -mt-24 mb-10">
                {/* Headings */}
                <h1 className="text-3xl md:text-6xl font-bold text-[#e0f2fe] mb-6"> DEVELOPER</h1>
                <p className="text-lg text-[#e0f2fe] max-w-xl text-center z-5 ">
                    Creative developer passionate about building beautiful and functional web experiences,
                    where clean code meets stunning design – creating user-friendly digital products that leave a lasting impression.
                </p>

                {/* Signature */}
                <div className="-mt-6">
                    <Image
                        src="/Signature.png"
                        alt="Signature"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
