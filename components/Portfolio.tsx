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
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://example.com/ecommerce-project.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
  },
  {
    id: 2,
    title: 'AI-powered Chatbot',
    description: 'An intelligent chatbot using natural language processing for customer support.',
    image: 'https://example.com/chatbot-project.jpg',
    technologies: ['Python', 'TensorFlow', 'NLP', 'AWS'],
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile app for personalized workout plans and progress tracking.',
    image: 'https://example.com/fitness-app-project.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Machine Learning'],
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Update selectedProject to be of type Project | null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Portfolio
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
                className="overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
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

export default Portfolio;
