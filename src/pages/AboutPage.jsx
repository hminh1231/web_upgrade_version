import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useRevealAnimations from '../hooks/useRevealAnimations';

export default function AboutPage() {
  const { t } = useLanguage();
  useRevealAnimations();

  return (
    <main className="py-32 pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h4 className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2">{t('nav-about')}</h4>
            <h2 className="text-4xl mb-4">Links Beauty &amp; Health Center</h2>
            <h3 className="serif text-xl italic text-brand-gold">{t('hero-slogan')}</h3>
            <div className="w-20 h-1 bg-brand-gold mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 gap-12 text-center md:text-left">
            <div className="reveal">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{t('about-intro')}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t('about-philosophy')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-8 bg-brand-cream rounded-2xl reveal border border-brand-gold/20 shadow-sm">
                <h4 className="font-bold text-sm tracking-widest text-brand-navy mb-4">{t('mission-label')}</h4>
                <p className="text-gray-600 text-sm leading-loose uppercase">{t('mission-text')}</p>
              </div>
              <div className="p-8 bg-brand-navy text-white rounded-2xl reveal shadow-xl">
                <h4 className="font-bold text-sm tracking-widest text-brand-gold mb-4">{t('vision-label')}</h4>
                <p className="text-gray-300 text-sm leading-loose uppercase">{t('vision-text')}</p>
              </div>
            </div>
            <div className="mt-12 reveal">
              <h4 className="font-bold text-sm tracking-widest text-brand-navy mb-10 text-center uppercase">{t('values-label')}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: t('v1-title'), desc: t('v1-desc') },
                  { title: t('v2-title'), desc: t('v2-desc') },
                  { title: t('v3-title'), desc: t('v3-desc') },
                  { title: t('v4-title'), desc: t('v4-desc') },
                ].map((value, i) => (
                  <div key={i} className="border-l-2 border-brand-gold pl-4">
                    <h5 className="font-bold text-brand-navy mb-2 uppercase">{value.title}</h5>
                    <p className="text-xs text-gray-500">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-20 text-center reveal">
            <Link to="/" className="btn-outline-gold px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
