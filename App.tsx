import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Boxes, Monitor, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-indigo-100">
            Full Stack Web Developer | React Specialist | UI/UX Enthusiast
          </p>
          <div className="flex justify-center gap-6">
            <a href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
              Contact Me
            </a>
            <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
              View Work
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Code2 size={40} />, title: 'Frontend Development', desc: 'React, Vue, TypeScript' },
              { icon: <Database size={40} />, title: 'Backend Development', desc: 'Node.js, Python, SQL' },
              { icon: <Monitor size={40} />, title: 'UI/UX Design', desc: 'Figma, Tailwind CSS' },
              { icon: <Boxes size={40} />, title: 'Architecture', desc: 'System Design, AWS' },
            ].map((skill, index) => (
              <div key={index} className="p-8 text-center rounded-lg bg-gray-50 hover:shadow-lg transition">
                <div className="inline-block p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                desc: 'Full-stack e-commerce solution with React and Node.js',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Task Management App',
                desc: 'React-based project management tool with real-time updates',
                image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Portfolio Generator',
                desc: 'Dynamic portfolio builder with customizable themes',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                    View Project <ExternalLink className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <a href="mailto:john@example.com" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                <Mail /> john@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                <Github /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                <Linkedin /> LinkedIn
              </a>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;