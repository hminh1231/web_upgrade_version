import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StatusToast from './components/StatusToast';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HyzenPage from './pages/HyzenPage';
import Hz1100Page from './pages/Hz1100Page';
import OlylifePage from './pages/OlylifePage';
import TeraP90Page from './pages/TeraP90Page';
import A9PurifierPage from './pages/A9PurifierPage';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <StatusToast />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hyzen" element={<HyzenPage />} />
          <Route path="/hyzen/hz1100" element={<Hz1100Page />} />
          <Route path="/olylife" element={<OlylifePage />} />
          <Route path="/olylife/tera-p90" element={<TeraP90Page />} />
          <Route path="/olylife/a9-purifier" element={<A9PurifierPage />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}
