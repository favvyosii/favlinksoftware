import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; 2024 FAVLINKSOFTWARE. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400" />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
