'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const ProjectCard = ({ title, description, image, technologies, githubUrl, demoUrl }: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6"
    >
      <div className="aspect-video mb-6 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-500 text-base mb-6">{description}</p>
      <div className="flex flex-wrap gap-3 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-black text-white text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-6">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-base"
        >
          View Code
        </a>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent text-base"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: 'Freetez',
      description: 'FreeTez is a decentralized application (dApp) that operates on the Tezos blockchain. The solution aims to revolutionize the freelancer marketplace. The platform uses blockchain technology and DeFi (Decentralized Finance) features such as payment in tokens to ease contracts and payments of freelancers',
      image: '/projects/logo.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/FREDDY-SELVANATHAN/FreeTez',
      //demoUrl: 'https://project1-demo.com',
    },
    {
      title: 'Q-Poll',
      description: 'Q-Poll is an innovative polling platform that allows users to create and participate in polls with unique features like sentiment analysis, real-time updates, and engagement scoring.',
      image: '/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/FREDDY-SELVANATHAN/Q-Poll',
      //demoUrl: 'https://project2-demo.com',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="section-title">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 