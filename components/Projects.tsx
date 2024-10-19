"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Define a type for the project
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description: 'A smart task management application that uses machine learning to prioritize and categorize tasks.',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'TensorFlow.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Next.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    id: 3,
    title: 'Blockchain Voting System',
    description: 'A secure and transparent voting system built on blockchain technology for organizational decision-making.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js'],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Update selectedProject to be of type Project | null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <Card
                className="overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105 bg-gray-800"
                onClick={() => setSelectedProject(project)} // This is now valid
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
