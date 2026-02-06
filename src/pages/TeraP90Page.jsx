import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useRevealAnimations from '../hooks/useRevealAnimations';

export default function TeraP90Page() {
  const { t } = useLanguage();
  useRevealAnimations();

  const features = [
    {
      num: 1,
      title: "World's First PEMF Integrated Technology",
      desc: "Leading-edge pulsed electromagnetic field technology combined with terahertz for comprehensive cellular support.",
    },
    {
      num: 2,
      title: "20-Level Intensity Control",
      desc: "Ensures a personalized experience, adapting to individual impedance and energy perception.",
    },
    {
      num: 3,
      title: "Upgraded Foot Pedal Design",
      desc: "Suitable for individuals up to shoe size 47 for comfortable, inclusive use.",
    },
    {
      num: 4,
      title: "Infrared Remote Control",
      desc: "Wireless operation for added convenience and ease of use.",
    },
    {
      num: 5,
      title: "Upgraded Safety with Fuse Protection",
      desc: "Enhanced safety design for peace of mind during use.",
      fullWidth: true,
    },
    {
      num: 6,
      title: "Additional Dual-Handle Attachments",
      desc: "Frost Age Beauty Device and Revitaluxe Massager for versatile treatment options.",
      fullWidth: true,
    },
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
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">Tera-P90+</h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 serif italic">The world&apos;s first PEMF Integrated Technology</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Advanced terahertz and PEMF technology to revitalize cells, improve circulation, and restore your body&apos;s natural balance. Safe, non-invasive cellular energy support with personalized intensity and upgraded ergonomics.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                <span className="block text-2xl font-bold text-brand-gold mb-1">20 Levels</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Intensity Control</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                <span className="block text-2xl font-bold text-brand-gold mb-1">PEMF + THz</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Dual Technology</span>
              </div>
            </div>
            <Link to="/#contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-brand-gold transition-colors w-full md:w-auto inline-block text-center">
              {t('btn-inquire-product')}
            </Link>
          </div>
          <div className="order-1 md:order-2 reveal bg-brand-cream rounded-[3rem] p-10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img
              src="https://image2url.com/r2/default/images/1770350200058-4a847531-723b-47cb-8896-6797576b1207.png"
              className="relative z-10 w-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              alt="Tera-P90+"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-20">
        <h3 className="text-2xl font-bold mb-10 text-center text-brand-navy">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feat) => (
            <div
              key={feat.num}
              className={`flex items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm reveal ${feat.fullWidth ? 'md:col-span-2' : ''}`}
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-sm mr-4">
                {feat.num}
              </span>
              <div>
                <h4 className="font-bold text-brand-navy mb-1">{feat.title}</h4>
                <p className="text-gray-500 text-sm">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy text-white py-20 mb-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Tera-P90+</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            The world&apos;s first PEMF integrated technology for personalized cellular revitalization. Safe, non-invasive, and designed for your comfort.
          </p>
          <Link to="/#contact" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-colors inline-block">
            {t('nav-contact')}
          </Link>
        </div>
      </section>
    </main>
  );
}
