'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

export default function About() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'SQL',
    'Git',
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title">About Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Freddy Selvanathan</h2>
              <p className="text-lg text-gray-500">
                I'm a passionate developer with a strong focus on creating modern web applications.
                My journey in web development has led me to explore various technologies and frameworks,
                always striving to learn and improve my skills.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-black text-white rounded-full border border-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Experience</h3>
                <div className="space-y-4">
                  <div className="card">
                    <h4 className="text-xl font-semibold text-white">Full Stack Developer</h4>
                    <p className="text-gray-500">Company Name • 2022 - Present</p>
                    <p className="text-gray-500 mt-2">
                      Working on modern web applications using React, Next.js, and Node.js.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-400">Bachelor's Degree in Computer Science</h4>
                    <p className="text-gray-500">University Name • 2018 - 2022</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'UI/UX Design', 'Open Source', 'Photography'].map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-black text-white rounded-full border border-gray-800"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 