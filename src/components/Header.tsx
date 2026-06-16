"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const routes = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Product', path: '/product' },
    { label: 'Financing', path: '/financing' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/NOK-Inc-Company-LogoFinal-02-1.webp" alt="Nok Inc. Logo" width={120} height={40} style={{ objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          {routes.map((route) => {
            const isActive = pathname === route.path || (route.path !== '/' && pathname?.startsWith(route.path));
            return (
              <Link 
                key={route.path} 
                href={route.path} 
                className={`${styles.link} ${isActive ? styles.active : ''}`}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>
        
        <div className={styles.ctaContainer}>
          <Link href="/contact" className={styles.ctaButton}>Get Started</Link>
        </div>

        {/* Hamburger Icon */}
        <button 
          className={styles.hamburgerBtn}
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.isOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          {routes.map((route) => {
            const isActive = pathname === route.path || (route.path !== '/' && pathname?.startsWith(route.path));
            return (
              <Link 
                key={`mobile-${route.path}`} 
                href={route.path} 
                className={`${styles.mobileLink} ${isActive ? styles.activeMobile : ''}`}
              >
                {route.label}
              </Link>
            );
          })}
          <Link href="/contact" className={styles.mobileCtaButton}>Get Started</Link>
        </nav>
      </div>
    </header>
  );
}
