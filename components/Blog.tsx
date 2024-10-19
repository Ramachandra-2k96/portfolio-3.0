"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is reshaping the landscape of web development and what it means for developers.',
    date: 'May 15, 2023',
    image: 'https://example.com/ai-web-dev.jpg',
  },
  {
    id: 2,
    title: 'Optimizing React Performance: Tips and Tricks',
    excerpt: 'Learn how to boost your React application\'s performance with these advanced optimization techniques.',
    date: 'April 22, 2023',
    image: 'https://example.com/react-performance.jpg',
  },
  {
    id: 3,
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'A comprehensive guide to designing and implementing scalable microservices architecture using Node.js.',
    date: 'March 10, 2023',
    image: 'https://example.com/microservices-nodejs.jpg',
  },
];

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Declare expandedPost state with a union type of number or null
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const toggleExpand = (postId: number) => {
    // Set expandedPost to null or the postId based on the current state
    setExpandedPost(prev => (prev === postId ? null : postId));
  };

  return (
    <section id="blog" ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Latest Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <Card className="bg-gray-700 text-white overflow-hidden">
                <img
                  src={post.image}
                  alt={`Image for ${post.title}`} // Improved accessibility
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{post.date}</p>
                  <motion.div
                    initial={{ height: 'auto' }}
                    animate={{ height: expandedPost === post.id ? 'auto' : '4.5rem' }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400">{post.excerpt}</p>
                  </motion.div>
                  <Button
                    variant="link"
                    className="mt-4 text-blue-400 hover:text-blue-300"
                    onClick={() => toggleExpand(post.id)}
                  >
                    {expandedPost === post.id ? 'Read Less' : 'Read More'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
