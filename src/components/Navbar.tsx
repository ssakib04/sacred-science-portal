
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Search } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
            Quranic Miracles
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#verses" className="text-foreground hover:text-primary transition-colors">
            Verses
          </a>
          <a href="#search" className="text-foreground hover:text-primary transition-colors">
            Search
          </a>
          <a href="#miracles" className="text-foreground hover:text-primary transition-colors">
            Miracles
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-primary transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden flex flex-col pt-20`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-6 text-lg">
          <a 
            href="#verses" 
            className="py-2 border-b border-border text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Verses
          </a>
          <a 
            href="#search" 
            className="py-2 border-b border-border text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Search
          </a>
          <a 
            href="#miracles" 
            className="py-2 border-b border-border text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Miracles
          </a>
        </nav>
      </div>
    </header>
  );
};
