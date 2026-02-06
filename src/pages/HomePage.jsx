import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import useRevealAnimations from '../hooks/useRevealAnimations';

export default function HomePage() {
  const { t } = useLanguage();

  useRevealAnimations();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroText = document.getElementById('hero-text');
      if (heroText) {
        const tl = gsap.timeline({ delay: 0.2 });
        tl.fromTo('#hero-text > span',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        ).fromTo('#hero-text h1',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        );
        const heroImage = document.getElementById('hero-image');
        if (heroImage) {
          tl.fromTo('#hero-image',
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' },
            '-=1'
          );
        }
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-24 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div id="hero-text" className="text-center md:text-left">
            <span className="text-brand-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t('hero-slogan')}
            </span>
            <h1 className="text-4xl md:text-7xl leading-tight mb-6">
              <span>{t('hero-title-1')} </span>
              <span className="italic text-brand-gold">{t('hero-title-2')} </span>
              <span>{t('hero-title-3')}</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t('hero-desc')}
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
              <Link to="/about" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-brand-gold transition-colors text-center">
                {t('btn-explore')}
              </Link>
              <div className="group relative hidden md:block">
                <Link to="/hyzen" className="border border-brand-navy text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-navy hover:text-white transition-all text-center inline-flex items-center">
                  <span>{t('nav-brands')}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
              <a href="#brands" className="md:hidden border border-brand-navy text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-navy hover:text-white transition-all text-center">
                {t('nav-brands')}
              </a>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0" id="hero-image">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 bg-white">
              <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800" alt="Tech Wellness" className="w-full h-[300px] md:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Home Product Preview */}
      <section id="brands" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl reveal mb-16">{t('brands-title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="reveal">
              <div className="bg-brand-cream rounded-3xl p-4 mb-8 shadow-sm group overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  alt="Hyzen Sample"
                />
              </div>
              <h4 className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2">Hyzen Series</h4>
              <h3 className="text-2xl mb-4 font-bold">{t('hyzen-name')}</h3>
              <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">{t('hyzen-sample-desc')}</p>
              <Link to="/hyzen" className="text-brand-gold font-bold text-sm hover:underline">{t('nav-brands')}</Link>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-brand-cream rounded-3xl p-4 mb-8 shadow-sm group overflow-hidden">
                <img
                  src="https://image2url.com/r2/default/images/1770326292871-362bb113-0cf7-47e8-966e-ea7171a5ebe2.png"
                  className="w-full h-64 md:h-80 object-contain p-4 bg-brand-cream rounded-2xl transform hover:scale-105 transition-all duration-700"
                  alt="A9 Air Purifier Sample"
                />
              </div>
              <h4 className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2">Olylife Series</h4>
              <h3 className="text-2xl mb-4 font-bold">{t('home-a9-name')}</h3>
              <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">{t('home-a9-desc')}</p>
              <Link to="/olylife" className="text-brand-gold font-bold text-sm hover:underline">{t('nav-brands')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="contact" className="py-24 bg-brand-navy text-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 reveal">
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">{t('info-title')}</h2>
            <p className="text-gray-400 mb-8">{t('info-p')}</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-t border-white/10 pt-4">
                <h4 className="font-bold text-brand-gold mb-1">{t('stat-1')}</h4>
                <p className="text-xs text-gray-500">{t('stat-1-desc')}</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white/5 p-10 rounded-3xl border border-white/10 text-center reveal w-full">
            <h3 className="text-2xl mb-6 serif">{t('contact-card-title')}</h3>
            <div className="bg-brand-gold text-white p-4 rounded-xl font-bold cursor-pointer hover:bg-white hover:text-brand-navy transition-all mb-4">
              WhatsApp / Zalo Inquiry
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{t('footer-rights')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
