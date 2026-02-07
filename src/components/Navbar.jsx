import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);

  // Nav entrance animation (matches original app.js)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', clearProps: 'transform,opacity' }
      );
    });
    return () => ctx.revert();
  }, []);

  const toggleMobileMenu = () => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (!isMobileMenuOpen) {
      menu.style.display = 'flex';
      gsap.to(menu, { height: '100vh', opacity: 1, duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => { menu.style.display = 'none'; }
      });
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      const menu = mobileMenuRef.current;
      if (menu) {
        gsap.to(menu, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => { menu.style.display = 'none'; }
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav ref={navRef} className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="navbar">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="flex flex-col z-50 relative">
          <Link to="/" className="logo-links serif font-bold">Links</Link>
          <span className="logo-subtitle">{t('nav-subtitle')}</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <div className="flex space-x-3 mr-8 border-r border-gray-200 pr-8">
            <span className={`lang-btn ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>EN</span>
            <span className="text-gray-300">|</span>
            <span className={`lang-btn ${language === 'vn' ? 'active' : ''}`} onClick={() => setLanguage('vn')}>VN</span>
            <span className="text-gray-300">|</span>
            <span className={`lang-btn ${language === 'kr' ? 'active' : ''}`} onClick={() => setLanguage('kr')}>KR</span>
          </div>
          <Link to="/" className="nav-link text-sm font-medium tracking-wide">{t('nav-home')}</Link>
          <Link to="/about" className="nav-link text-sm font-medium tracking-wide">{t('nav-about')}</Link>
          <div className="group relative">
            <a className="nav-link text-sm font-medium tracking-wide flex items-center">
              {t('nav-brands')}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="dropdown-menu">
              <Link to="/hyzen" className="block px-6 py-3 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-gold">Hyzen</Link>
              <Link to="/olylife" className="block px-6 py-3 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-gold">Olylife</Link>
            </div>
          </div>
          <Link to="/#contact" className="btn-outline-gold px-6 py-2 rounded-full text-sm font-bold shadow-sm">{t('nav-contact')}</Link>
        </div>
        <button onClick={toggleMobileMenu} className="md:hidden text-brand-navy z-50 focus:outline-none p-2 -mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="menu-icon">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className="absolute top-0 left-0 w-full bg-white h-screen flex flex-col pt-24 px-6 md:hidden shadow-xl"
        style={{ display: 'none' }}
      >
        <div className="flex flex-col space-y-6 text-center">
          <Link to="/" onClick={closeMobileMenu} className="text-xl font-medium text-brand-navy hover:text-brand-gold">{t('nav-home')}</Link>
          <Link to="/about" onClick={closeMobileMenu} className="text-xl font-medium text-brand-navy hover:text-brand-gold">{t('nav-about')}</Link>
          <div className="border-t border-b border-gray-100 py-4 flex flex-col space-y-4">
            <span className="text-sm uppercase tracking-widest text-gray-400">{t('nav-brands')}</span>
            <Link to="/hyzen" onClick={closeMobileMenu} className="text-lg text-brand-navy hover:text-brand-gold">Hyzen</Link>
            <Link to="/olylife" onClick={closeMobileMenu} className="text-lg text-brand-navy hover:text-brand-gold">Olylife</Link>
          </div>
          <Link to="/#contact" onClick={closeMobileMenu} className="text-xl font-bold text-brand-gold">{t('nav-contact')}</Link>
          <div className="flex justify-center space-x-6 pt-8">
            <span className={`lang-btn text-lg ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>EN</span>
            <span className={`lang-btn text-lg ${language === 'vn' ? 'active' : ''}`} onClick={() => setLanguage('vn')}>VN</span>
            <span className={`lang-btn text-lg ${language === 'kr' ? 'active' : ''}`} onClick={() => setLanguage('kr')}>KR</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
