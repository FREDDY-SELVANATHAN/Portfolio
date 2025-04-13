'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const projects = [
  {
    title: 'FreeTez',
    description: 'FreeTez is a decentralized application (dApp) that operates on the Tezos blockchain. The solution aims to revolutionize the freelancer marketplace. The platform uses blockchain technology and DeFi (Decentralized Finance) features such as payment in tokens to ease contracts and payments of freelancers.',
    image: '/projects/logo.png',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/FREDDY-SELVANATHAN/FreeTez',
    //live: '',
  },
  {
    title: 'Q-Poll',
    description: 'Q-Poll is an innovative polling platform that allows users to create and participate in polls with unique features like sentiment analysis, real-time updates, and engagement scoring.',
    //image: '/projects/project2.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe'],
    github: 'https://github.com/FREDDY-SELVANATHAN/Q-Poll',
    //live: '',
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card"
    >
      <div className="aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-500 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-black text-white rounded-full text-sm border border-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 