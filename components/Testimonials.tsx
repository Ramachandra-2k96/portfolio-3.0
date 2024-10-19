"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Tech Innovators',
    content: 'Akshay\'s expertise in full-stack development helped us launch our product ahead of schedule. His attention to detail and problem-solving skills are unmatched.',
    avatar: 'https://example.com/john-doe-avatar.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO, AI Solutions',
    content: 'Working with Akshay on our AI-powered platform was a game-changer. His deep understanding of machine learning algorithms significantly improved our product\'s performance.',
    avatar: 'https://example.com/jane-smith-avatar.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Founder, Mobile Health',
    content: 'Akshay\'s mobile app development skills are top-notch. He delivered a user-friendly and robust fitness app that our customers love. Highly recommended!',
    avatar: 'https://example.com/mike-johnson-avatar.jpg',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What Clients Say
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-800 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                  <p className="text-lg italic">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;