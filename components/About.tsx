"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Years of Experience', value: 3 },
    { label: 'Projects Completed', value: 50 },
    { label: 'Technologies Mastered', value: 15 },
    { label: 'Cups of Coffee', value: 1000 },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 bg-gray-800 text-white h-full">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-300">
                As a passionate Full-Stack Developer with 3 years of experience, I've had the privilege of working on diverse projects that have shaped the digital landscape. My journey in tech has been driven by a relentless curiosity and a desire to create innovative solutions that make a difference.
              </p>
              <p className="text-gray-300 mt-4">
                From crafting responsive web applications to developing scalable backend systems, I've honed my skills across the entire development stack. My experience with cutting-edge technologies and my enthusiasm for AI and machine learning have allowed me to bring unique perspectives to every project I undertake.
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-6 bg-gray-800 text-white h-full">
              <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Full-stack Web Development (React, Node.js, Express)</li>
                <li>Database Design and Management (SQL, MongoDB)</li>
                <li>RESTful API Development</li>
                <li>Cloud Services (AWS, Google Cloud)</li>
                <li>Version Control (Git) and CI/CD pipelines</li>
                <li>Agile Methodologies</li>
                <li>UI/UX Design Principles</li>
                <li>Machine Learning and AI (TensorFlow, PyTorch)</li>
              </ul>
            </Card>
          </motion.div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <motion.span
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 + 0.2 * index }}
              >
                {stat.value}+
              </motion.span>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;