import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useRevealAnimations from '../hooks/useRevealAnimations';

export default function OlylifePage() {
  const { t } = useLanguage();
  useRevealAnimations();

  return (
    <main className="py-32 pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h4 className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2">Olylife International</h4>
          <h2 className="text-3xl md:text-5xl mb-6 font-bold">{t('olylife-page-title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t('olylife-desc')}</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        {/* Tera-P90+ */}
        <section className="reveal mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-brand-navy">Tera-P90+</h3>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-48 h-48 bg-brand-cream rounded-2xl flex items-center justify-center p-4">
                <img
                  src="https://image2url.com/r2/default/images/1770350200058-4a847531-723b-47cb-8896-6797576b1207.png"
                  className="w-full h-full object-contain"
                  alt="Tera-P90+"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Advanced terahertz and PEMF technology to revitalize cells, improve circulation, and restore your body&apos;s natural balance. Safe, non-invasive cellular energy support.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-brand-cream text-brand-navy px-3 py-1 rounded-lg text-xs font-medium">PEMF</span>
                  <span className="bg-brand-cream text-brand-navy px-3 py-1 rounded-lg text-xs font-medium">Terahertz</span>
                  <span className="bg-brand-cream text-brand-navy px-3 py-1 rounded-lg text-xs font-medium">Non-Invasive</span>
                </div>
                <Link to="/olylife/tera-p90" className="bg-brand-gold text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-navy transition-all inline-block">
                  {t('btn-view-details')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* A9 */}
        <section className="reveal">
          <h3 className="text-2xl font-bold mb-8 text-center text-brand-navy">{t('home-a9-name')}</h3>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-48 h-48 bg-brand-cream rounded-2xl flex items-center justify-center p-4">
                <img
                  src="https://image2url.com/r2/default/images/1770326292871-362bb113-0cf7-47e8-966e-ea7171a5ebe2.png"
                  className="w-full h-full object-contain"
                  alt="A9 Air Purifier"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6">{t('home-a9-desc')}</p>
                <Link to="/olylife/a9-purifier" className="bg-brand-gold text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-navy transition-all inline-block">
                  {t('btn-view-details')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-20 text-center reveal">
          <Link to="/" className="btn-outline-gold px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs inline-block">
            Return to Portal
          </Link>
        </div>
      </div>
    </main>
  );
}
