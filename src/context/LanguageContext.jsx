import { createContext, useContext, useState, useCallback } from 'react';
import gsap from 'gsap';
import translations from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');

  const setLanguage = useCallback((lang) => {
    // Fade body out and back in, matching original app.js behavior
    gsap.to('body', {
      opacity: 0.5,
      duration: 0.2,
      onComplete: () => {
        setLanguageState(lang);
        gsap.to('body', { opacity: 1, duration: 0.3 });
      }
    });
  }, []);

  const t = useCallback((key) => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    // Fallback to English
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
