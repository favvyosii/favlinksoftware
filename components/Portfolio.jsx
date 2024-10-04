import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-100 bg-gray-900">
      <h2 className="text-4xl text-center font-bold mb-10">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-white p-4 shadow-md rounded-md text-black">
          <div className="relative w-full h-40 mb-4 rounded-md">
            <Image 
              src="https://elosiubafavour.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecc.35a36acc.jpg&w=1920&q=95" 
              alt="Online Shopping Website" 
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold">Online Shopping Website</h3>
          <p>Built with Next.js and Sanity to handle the admin and CMS</p>
          <Link href="https://supercrib.vercel.app" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto">
              Visit
            </button>
          </Link>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md text-black">
          <div className="relative w-full h-40 mb-4 rounded-md">
            <Image 
              src="https://elosiubafavour.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood.d6528344.png&w=1920&q=95" 
              alt="A Recipe Website" 
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold">A Recipe Website</h3>
          <p>A Recipe Website Built with React.js and Sanity.io</p>
          <Link href="https://supercrib.vercel.app" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto">
              Visit
            </button>
          </Link>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md text-black">
          <div className="relative w-full h-40 mb-4 rounded-md">
            <Image 
              src="https://elosiubafavour.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft.a0871f76.jpg&w=1920&q=95" 
              alt="A Blockchain Website" 
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold">A Blockchain Website</h3>
          <p>NFT Minting Website Built with React.js, Thirdweb SDK</p>
          <Link href="https://supercrib.vercel.app" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto">
              Visit
            </button>
          </Link>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md text-black">
          <div className="relative w-full h-40 mb-4 rounded-md">
            <Image 
              src="/icehub.jpg" 
              alt="Company Portfolio Website for Icehub" 
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold">Company Portfolio Website for Icehub</h3>
          <p>Built With HTML, CSS, And Javascript</p>
          <Link href="https://icehub-ng.com/" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto">
              Visit
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
