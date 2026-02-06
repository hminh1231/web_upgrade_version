import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="logo-links serif font-bold">Links</span>
              <span className="logo-subtitle">{t('nav-subtitle')}</span>
            </Link>
            <p className="text-gray-500 text-sm italic font-medium">"{t('hero-slogan')}"</p>
          </div>
          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Links</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-brand-gold">Home</Link></li>
                <li><Link to="/about" className="hover:text-brand-gold">About Us</Link></li>
                <li><Link to="/olylife" className="hover:text-brand-gold">Olylife Page</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Partners</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Hyzen Global</li>
                <li>Olylife International</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
          <p>&copy; 2026 Links Beauty &amp; Health Center. <span>{t('footer-rights')}</span></p>
        </div>
      </div>
    </footer>
  );
}
