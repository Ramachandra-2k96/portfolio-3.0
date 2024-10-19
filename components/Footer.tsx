import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Akshay Kumar Hegde. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/akshaykumar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/akshaykumar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/akshaykumar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;