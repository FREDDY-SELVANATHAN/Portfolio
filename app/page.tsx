'use client';

import { motion } from 'framer-motion';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-primary mb-6">Freddy Selvanathan</h1>
          <p className="text-2xl text-gray-300 mb-8">Welcome to my portfolio</p>
          
          <div className="flex justify-center space-x-4">
            <a href="/about" className="btn-primary">About Me</a>
            <a href="/projects" className="btn-secondary">My Projects</a>
            <a href="/contact" className="btn-accent">Contact</a>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 