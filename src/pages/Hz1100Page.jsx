import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useRevealAnimations from '../hooks/useRevealAnimations';

export default function Hz1100Page() {
  const { t } = useLanguage();
  useRevealAnimations();

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-6 mb-8">
        <Link to="/hyzen" className="flex items-center text-gray-500 hover:text-brand-gold transition-colors w-fit">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>{t('btn-back-hyzen')}</span>
        </Link>
      </div>

      <section className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 reveal">
            <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2 block">Hyzen Global</span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">HZ-1100</h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 serif italic">{t('hz1100-detail-subtitle')}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{t('hz1100-detail-intro')}</p>
            <Link to="/#contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-brand-gold transition-colors w-full md:w-auto inline-block text-center">
              {t('btn-inquire-product')}
            </Link>
          </div>
          <div className="order-1 md:order-2 reveal bg-brand-cream rounded-[3rem] p-10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img
              src="https://image2url.com/r2/default/images/1770329746271-8dad868e-3b70-49bd-8c8a-eff61f0b1ec9.png"
              className="relative z-10 w-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              alt="Hyzen HZ-1100"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 mb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal">
              <h3 className="text-3xl font-bold mb-10 text-brand-navy flex items-center">
                <span className="w-12 h-1 bg-brand-gold mr-4"></span>
                <span>{t('hz-health-title')}</span>
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-brand-cream p-4 rounded-2xl mr-6 text-brand-gold">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">{t('hz-ben-1')}</h4>
                    <p className="text-gray-500 text-sm">Neutralizes harmful free radicals, protecting cells from oxidative stress and aging.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-cream p-4 rounded-2xl mr-6 text-brand-gold">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">{t('hz-ben-2')}</h4>
                    <p className="text-gray-500 text-sm">Outstanding ability to reduce systemic inflammation, supporting faster recovery and comfort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-cream p-4 rounded-2xl mr-6 text-brand-gold">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">{t('hz-ben-3')}</h4>
                    <p className="text-gray-500 text-sm">Helps reduce lipid levels within blood vessels, promoting better circulation and cardiovascular health.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal bg-brand-navy text-white p-10 rounded-3xl relative overflow-hidden" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <h3 className="text-3xl font-bold mb-10 flex items-center relative z-10">
                <span className="w-12 h-1 bg-white mr-4"></span>
                <span>{t('hz-tech-title')}</span>
              </h3>
              <div className="grid gap-6 relative z-10">
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400 text-sm uppercase tracking-widest">{t('hz-spec-1-label')}</span>
                    <span className="text-2xl font-bold text-brand-gold">1200+ ppb</span>
                  </div>
                  <p className="text-sm text-gray-300">{t('hz-spec-1-desc')}</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400 text-sm uppercase tracking-widest">{t('hz-spec-2-label')}</span>
                    <span className="text-2xl font-bold text-brand-gold">Constant</span>
                  </div>
                  <p className="text-sm text-gray-300">{t('hz-spec-2-desc')}</p>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400 text-sm uppercase tracking-widest">{t('hz-spec-3-label')}</span>
                    <span className="text-2xl font-bold text-brand-gold">Extended</span>
                  </div>
                  <p className="text-sm text-gray-300">{t('hz-spec-3-desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
