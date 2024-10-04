import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section: Text */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Transform Your Ideas Into <br />
              <span className="text-blue-500">Innovative Solutions</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              We provide expert software consulting services to bring your projects to life.
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full text-lg lg:text-xl font-medium hover:bg-blue-600 transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Right Section: Image */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
              <Image
                src="/hero-image.jpg" // Replace with your actual image path
                alt="Consulting Services"
                layout="responsive"
                width={600} // Adjust these dimensions to match your actual image size
                height={400} // The aspect ratio will be maintained
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
