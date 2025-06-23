import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiAliensLine } from "react-icons/ri";

export default function Home() {
  return (

  <div className="min-h-screen bg-dark text-white flex flex-col">
      {/* Navigation */}
    <header className="w-full py-6 px-8">
    <nav className="flex justify-end items-center space-x-8">
      <div className="nav-links hidden md:flex space-x-8">
        <Link href="/" className="text-neon">Home</Link>
        <Link href="/work" className="hover:text-neon">Work</Link>
        <Link href="/work/contactpage" className="hover:text-neon">Contact</Link>
      </div>
      
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-neon text-dark px-4 py-2 rounded-full font-medium inline-block"
        >
        Let's Talk
      </a>

    </nav>
    </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Right Content - Profile Image (moved to left) */}
        <div className="flex justify-center items-center order-first md:order-none">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-neon animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border-dashed border-2 border-neon animate-spin-slow"></div>
            <Image
              src="/zoey1.jpg"
              alt="Thitima Khamgong"
              width={256}
              height={256}
              className="absolute inset-0 w-full h-full rounded-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Left Content (text) - now on the right */}
        <div className="space-y-6">
          <p className="text-gray-300">Software Developer</p>
          <h2 className="text-5xl md:text-6xl font-mono leading-tight">
            I'm 
            <br />
            <span className="text-neon">Zoey</span>
          </h2>

          <p className="text-gray-300 max-w-md text-sm">
            I excel at crafting elegant digital experiences and
            I am proficient in various programming languages and
            technologies.
          </p>

          <div className="flex space-x-4 mt-8">
            <button className="border border-neon text-neon px-4 py-2 rounded-full font-medium flex items-center">
              DOWNLOAD CV
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-neon hover:text-neon">
                <FaGithub />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-neon hover:text-neon">
                <FaLinkedin />
              </a>
               <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-neon hover:text-neon">
                <RiAliensLine />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="px-8 py-12 flex flex-col items-center text-center">
  <div className="mb-12">
    <h3 className="text-5xl font-bold text-white">3</h3>
    <p className="text-gray-400 mt-1">Years of<br />experience</p>
  </div>

  {/* Timeline */}
  <div className="relative w-full max-w-3xl">
    {/* <div className="absolute top-4 left-0 right-0 h-0.5 bg-white"></div> */}



  {/* Experience */}
    <div className="flex justify-between items-start relative z-1">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="flex flex-col items-center w-1/1">
          {/* Circle */}
          <div className="w-8 h-8 rounded-full mb-2 circle-color"></div>
          {/* Label */}
          <p className="text-sm text-white leading-tight">4 month<br />programmer</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}