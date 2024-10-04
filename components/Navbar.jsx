import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50"> {/* Added sticky, top-0, and z-index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">
              <Link href="/">FAVLINKSOFTWARE</Link>
            </h1>
          </div>

          {/* Hamburger Menu (for mobile view) */}
          <div className="sm:hidden">
            <button
              onClick={toggleNav}
              type="button"
              className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Links (for larger screens) */}
          <div className="hidden sm:block">
            <div className="ml-10 flex space-x-4">
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link href="/services" className="hover:text-gray-400">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-gray-400">
                Portfolio
              </Link>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
              Home
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
              Services
            </Link>
            <Link href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
              Portfolio
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
