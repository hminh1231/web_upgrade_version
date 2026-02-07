import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useRevealAnimations from '../hooks/useRevealAnimations';

export default function A9PurifierPage() {
  const { t } = useLanguage();
  useRevealAnimations();

  const filters = [
    { num: 1, title: t('filter-1'), desc: 'Removes large particles, hair, dust' },
    { num: 2, title: t('filter-2'), desc: 'Captures 99.97% of 0.3 micron particles' },
    { num: 3, title: t('filter-3'), desc: 'Absorbs odors, formaldehyde, TVOCs' },
    { num: 4, title: t('filter-4'), desc: 'Releases ecological grade negative ions' },
  ];

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-6 mb-8">
        <Link to="/olylife" className="flex items-center text-gray-500 hover:text-brand-gold transition-colors w-fit">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>{t('btn-back-olylife')}</span>
        </Link>
      </div>

      <section className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 reveal">
            <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2 block">OlyLife International</span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">A9 Smart Anion</h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 serif italic">{t('a9-detail-subtitle')}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{t('a9-detail-intro')}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                <span className="block text-2xl font-bold text-brand-gold mb-1">HEPA 13</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Medical Grade</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                <span className="block text-2xl font-bold text-brand-gold mb-1">Anion+</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Forest Density</span>
              </div>
            </div>
            <Link to="/#contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-brand-gold transition-colors w-full md:w-auto inline-block text-center">
              {t('btn-inquire-product')}
            </Link>
          </div>
          <div className="order-1 md:order-2 reveal bg-brand-cream rounded-[3rem] p-10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img
              src="https://image2url.com/r2/default/images/1770326292871-362bb113-0cf7-47e8-966e-ea7171a5ebe2.png"
              className="relative z-10 w-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              alt="A9 Air Purifier"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Why Bama */}
          <div className="bg-brand-navy text-white rounded-3xl p-8 reveal shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-brand-gold">{t('a9-concept-title')}</h3>
            <p className="text-gray-300 leading-relaxed mb-6">{t('a9-concept-desc')}</p>
            <div className="flex justify-between items-end border-t border-white/20 pt-6">
              <div>
                <span className="block text-3xl font-bold text-white">30,000+</span>
                <span className="text-xs text-gray-400 uppercase">Bama Village Ions/cm&sup3;</span>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-bold text-gray-500">&lt; 500</span>
                <span className="text-xs text-gray-400 uppercase">Urban Office Ions/cm&sup3;</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 reveal shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-brand-navy">{t('a9-filter-title')}</h3>
            <ul className="space-y-4">
              {filters.map((filter) => (
                <li key={filter.num} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold text-xs mr-4">
                    {filter.num}
                  </span>
                  <div>
                    <h5 className="font-bold text-sm text-brand-navy">{filter.title}</h5>
                    <p className="text-xs text-gray-500">{filter.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-brand-cream rounded-3xl p-8 reveal">
          <h3 className="text-xl font-bold mb-6 text-center text-brand-navy uppercase tracking-widest">{t('a9-specs-title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <span className="block text-gray-400 text-xs uppercase mb-1">CADR Rate</span>
              <span className="font-bold text-brand-navy text-lg">320 m&sup3;/h</span>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <span className="block text-gray-400 text-xs uppercase mb-1">Coverage Area</span>
              <span className="font-bold text-brand-navy text-lg">35 - 50 m&sup2;</span>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <span className="block text-gray-400 text-xs uppercase mb-1">Noise Level</span>
              <span className="font-bold text-brand-navy text-lg">&lt; 28 dB</span>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <span className="block text-gray-400 text-xs uppercase mb-1">PM2.5 Sensor</span>
              <span className="font-bold text-brand-navy text-lg">Laser Precision</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature image */}
      <section className="container mx-auto px-6 mb-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 reveal">
          <img
            src="https://image2url.com/r2/default/images/1770328588616-57b7e994-0944-4ffb-ba94-918f2bd08d03.png"
            className="w-full h-auto object-cover"
            alt="A9 Air Purifier Features"
          />
        </div>
      </section>

      {/* Core Technologies */}
      <section className="bg-brand-navy text-white py-20 mb-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">{t('a9-features-title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-gold/50 transition-colors reveal">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">{t('a9-f1-title')}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t('a9-f1-desc')}</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-gold/50 transition-colors reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">{t('a9-f2-title')}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t('a9-f2-desc')}</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-gold/50 transition-colors reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">{t('a9-f3-title')}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t('a9-f3-desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
