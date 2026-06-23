import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Heritage Minimalism
 * Features: Sticky navigation, responsive mobile menu, logo, and primary navigation links
 * Design: Deep navy background with off-white text, subtle shadow on scroll
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Our Team', href: '/team' },
    { label: 'Case Results', href: '/case-results' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-subtle'
          : 'bg-primary'
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/logo-F9TdxWhPRPucjVsxHXc8bx.webp"
              alt="Trust Legal Corporate"
              className="h-10 w-10 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-primary-foreground font-serif font-bold text-lg hidden sm:inline">
              Trust Legal
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-primary-foreground hover:text-accent transition-colors duration-200 font-medium text-sm">
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Link href="/contact">
          <a className="hidden md:inline-block px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-200 transform hover:scale-102">
            Book Consultation
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-accent/20">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-primary-foreground hover:text-accent transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a
                className="mt-4 px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
