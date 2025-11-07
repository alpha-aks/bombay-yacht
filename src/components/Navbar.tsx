'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, XCircle, ChevronDown } from 'lucide-react';

// Animation variants for framer motion
const menuVariants = {
  open: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: 'spring' as const,
      stiffness: 300, 
      damping: 30 
    }
  },
  closed: { 
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { 
      type: 'spring' as const,
      stiffness: 300, 
      damping: 30 
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95
  }
};

// Mock yacht data for search
const yachtData = [
  { id: 1, name: 'Ocean Breeze', type: 'Motor Yacht', capacity: 12 },
  { id: 2, name: 'Sea Serenity', type: 'Sailing Yacht', capacity: 8 },
  { id: 3, name: 'Azure Dream', type: 'Catamaran', capacity: 10 },
  { id: 4, name: 'Royal Pearl', type: 'Superyacht', capacity: 16 },
  { id: 5, name: 'Wave Dancer', type: 'Motor Yacht', capacity: 6 },
];

interface Yacht {
  id: number;
  name: string;
  type: string;
  capacity: number;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Yacht[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Yachts', path: '/yachts' },
    { name: 'Corporate Events', path: '/corporate-events' },
    { name: 'Help', path: '/help' },
  ];
  
  const isActive = (path: string) => pathname === path;

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = yachtData.filter(
        (yacht) =>
          yacht.name.toLowerCase().includes(query) ||
          yacht.type.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Handle yacht selection from search results
  const handleYachtSelect = (yachtId: number) => {
    router.push(`/yachts/${yachtId}` as any);
    setSearchQuery('');
    setSearchResults([]);
    setSearchOpen(false);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus input when search is opened
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <nav className="fixed w-full z-50">
      {/* Glass effect background */}
      <motion.div 
        className="absolute inset-0 bg-navy-900/90 backdrop-blur-lg -z-10 border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      
      {/* Add gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Bombay Yacht
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover="hover"
                whileTap="tap"
                variants={menuVariants}
              >
                <Link 
                  href={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-white bg-white/10 backdrop-blur-sm shadow-lg'
                      : 'text-white/90 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span 
                      className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-white rounded-full"
                      layoutId="activeLink"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Search Button */}
            <motion.button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="ml-2 p-2 text-white/90 hover:bg-white/10 rounded-full transition-colors group"
              aria-label="Search yachts"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="h-5 w-5 transition-transform group-hover:scale-110" />
            </motion.button>
            
            {/* Inquire Now Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2"
            >
              <Link
                href="#inquire-now"
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                Inquire Now
                <motion.span 
                  className="ml-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: 'easeInOut'
                  }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu and search */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-white/90 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Search yachts"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/90 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
          <div className="max-w-2xl mx-auto px-4">
            <div 
              ref={searchRef}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search yachts by name or type..."
                  className="w-full pl-12 pr-10 py-4 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="h-5 w-5" />
                  </button>
                )}
              </div>
              
              {searchResults.length > 0 && (
                <div className="border-t border-gray-100 max-h-96 overflow-y-auto">
                  {searchResults.map((yacht) => (
                    <div
                      key={yacht.id}
                      onClick={() => handleYachtSelect(yacht.id)}
                      className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="font-medium text-gray-900">{yacht.name}</div>
                      <div className="text-sm text-gray-500">
                        {yacht.type} • Up to {yacht.capacity} guests
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {searchQuery && searchResults.length === 0 && (
                <div className="p-4 text-center text-gray-500">
                  No yachts found matching "{searchQuery}"
                </div>
              )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-navy-900/95 backdrop-blur-lg z-40 pt-16 overflow-y-auto"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
          <div className="px-4 py-6 space-y-4">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search yachts..."
                className="w-full pl-12 pr-4 py-3 bg-navy-800/50 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-blue-600/20 text-white border-l-4 border-blue-500'
                      : 'text-white/90 hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${isActive(link.path) ? 'rotate-180' : 'rotate-0'}`} />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * navLinks.length }}
              className="pt-4"
            >
              <Link
                href="#inquire-now"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Inquire Now
              </Link>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
