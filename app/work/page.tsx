import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si"
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiAliensLine } from "react-icons/ri";

export default function WorkPage() {
  const technologies = [
    { icon: <FaReact className="text-4xl" />, name: "React" },
    { icon: <SiNextdotjs className="text-4xl" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-4xl" />, name: "Node.js" },
    { icon: <FaPython className="text-4xl" />, name: "Python" },
    { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind" },
    { icon: <FaJs className="text-4xl" />, name: "JavaScript" },
    { icon: <SiMongodb className="text-4xl" />, name: "MongoDB" },
    { icon: <FaHtml5 className="text-4xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-4xl" />, name: "CSS3" }
  ]

  const projects = [ 
    {
      title: "Portfolio Website",
      description: "portfolio website with modern design",
      tech: ["Next.js"],
      image: "/project5.jpg"
    },
    {
      title: "Application",
      description: "Real-time chat application with Socket.io",
      tech: ["React", "Socket.io", "Node.js"],
      image: "/project6.jpg"
    }
  ]

  return (
  <div className="min-h-screen bg-dark text-white flex flex-col">
      {/* Navigation */}
    <header className="w-full py-6 px-8">
    <nav className="flex justify-end items-center space-x-8">
      <div className="nav-links hidden md:flex space-x-8">
        <Link href="/" className="hover:text-neon">Home</Link>
        <Link href="/work" className="text-neon">Work</Link>
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

    <main className="flex-1 px-8 py-12 md:py-16 pb-20 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-mono text-neon mb-4">Projec</h2>
          <p className="text-gray-300 text-lg">Here are some of my recent projects</p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technologies I Use</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-4 border border-gray-700 rounded-lg hover:border-neon transition-colors">
                <div className="text-neon mb-2">{tech.icon}</div>
                <span className="text-white text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-neon transition-colors group">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-neon text-dark text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>

    </div>
  )
}