import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      {/* Navigation */}
      <header className="w-full py-6 px-8">
        <nav className="flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold">Luke<span className="text-neon">.</span></h1>
          </div>
          <div className="nav-links hidden md:flex space-x-8">
            <a href="#" className="text-neon">Home</a>
            <a href="#" className="hover:text-neon">Services</a>
            <a href="#" className="hover:text-neon">Resume</a>
            <a href="#" className="hover:text-neon">Work</a>
            <a href="#" className="hover:text-neon">Contact</a>
          </div>
          <button className="bg-neon text-dark px-4 py-2 rounded-full font-medium">Let's Talk</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-gray-300">Software Developer</p>
          <h2 className="text-5xl md:text-6xl font-mono leading-tight">
            Hello I'm
            <br />
            <span className="text-neon">Luke Coleman</span>
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
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-neon animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border-dashed border-2 border-neon animate-spin-slow"></div>
            <Image
              src="/profile.jpg"
              alt="Luke Coleman"
              width={320}
              height={320}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="stat-item">
          <h3 className="text-4xl font-bold text-white">12</h3>
          <p className="text-sm text-gray-400">Years of<br />experience</p>
        </div>
        <div className="stat-item">
          <h3 className="text-4xl font-bold text-white">26</h3>
          <p className="text-sm text-gray-400">Projects<br />completed</p>
        </div>
        <div className="stat-item">
          <h3 className="text-4xl font-bold text-white">8</h3>
          <p className="text-sm text-gray-400">Technologies<br />mastered</p>
        </div>
        <div className="stat-item">
          <h3 className="text-4xl font-bold text-white">500</h3>
          <p className="text-sm text-gray-400">Code<br />commits</p>
        </div>
      </section>
    </div>
  );
}