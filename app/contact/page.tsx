'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

export default function Contact() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: 'instagram' },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="section-title">Contact Me</h1>
          
          <div className="space-y-8">
            <div className="card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-900 overflow-hidden">
                  <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Freddy Selvanathan</h2>
                  <p className="text-gray-500">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">About Me</h3>
                  <p className="text-gray-500">
                    Passionate about creating modern web applications and exploring new technologies.
                    Always eager to learn and improve my skills.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact Info</h3>
                  <div className="space-y-2">
                    <p className="text-gray-500">Email: your.email@example.com</p>
                    <p className="text-gray-500">Location: Your Location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    <i className={`fab fa-${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">Download Resume</h3>
              <a
                href="/resume.pdf"
                download
                className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 