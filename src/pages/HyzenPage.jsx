import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useRevealAnimations from '../hooks/useRevealAnimations';

export default function HyzenPage() {
  const { t } = useLanguage();
  useRevealAnimations();

  return (
    <main className="py-32 pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h4 className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2">{t('hyzen-page-subtitle')}</h4>
          <h2 className="text-3xl md:text-5xl mb-6 font-bold">{t('hyzen-tech-title')}</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
              <div className="bg-brand-cream rounded-2xl overflow-hidden mb-8 h-64 md:h-80 flex items-center justify-center relative p-4">
                <img
                  src="https://image2url.com/r2/default/images/1770409255553-45c5b747-7531-4a17-acc8-a6d5a2aaa1cd.png"
                  className="w-full h-full object-contain"
                  alt="Hyzen Hydrogen Water Tumbler"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">Hyzen Hydrogen Water Tumbler</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Portable hydrogen-rich water in a sleek tumbler. Enjoy antioxidant benefits wherever you go&mdash;at the gym, office, or on the road.
              </p>
              <ul className="space-y-3 text-sm text-gray-500 mb-8">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>Hydrogen-Rich Water On the Go</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>Rechargeable &amp; Portable</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>BPA-Free, Safe Materials</li>
              </ul>
              <Link to="/#contact" className="block w-full mt-4 btn-outline-gold px-8 py-3 rounded-xl font-bold text-sm text-center">
                {t('nav-contact')}
              </Link>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
              <div className="bg-brand-cream rounded-2xl overflow-hidden mb-8 h-64 md:h-80 flex items-center justify-center relative p-4">
                <img
                  src="https://image2url.com/r2/default/images/1770329746271-8dad868e-3b70-49bd-8c8a-eff61f0b1ec9.png"
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
                  alt="Hyzen HZ-1100"
                />
              </div>
              <h4 className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2">Premium Series</h4>
              <h3 className="text-3xl font-bold mb-4">{t('hz1100-name')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{t('hz1100-desc')}</p>
              <ul className="space-y-3 text-sm text-gray-500 mb-8">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-navy rounded-full mr-3"></span><span>{t('hz1100-feat-1')}</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-navy rounded-full mr-3"></span><span>{t('hz1100-feat-2')}</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-navy rounded-full mr-3"></span><span>{t('hz1100-feat-3')}</span></li>
              </ul>
              <Link to="/hyzen/hz1100" className="block w-full mt-4 bg-brand-gold text-white py-3 rounded-xl font-bold hover:bg-white hover:text-brand-navy transition-all text-center">
                {t('btn-view-details')}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center reveal">
          <Link to="/" className="btn-outline-gold px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs inline-block">
            Return to Portal
          </Link>
        </div>
      </div>
    </main>
  );
}
