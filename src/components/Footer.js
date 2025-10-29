import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <button 
            onClick={() => handleLinkClick('/compound-interest')}
            className={location.pathname === '/compound-interest' ? 'footer-link active' : 'footer-link'}
          >
            {t('compoundInterest')}
          </button>
          <button 
            onClick={() => handleLinkClick('/age-calculator')}
            className={location.pathname === '/age-calculator' ? 'footer-link active' : 'footer-link'}
          >
            {t('ageCalculator')}
          </button>
          <button 
            onClick={() => handleLinkClick('/days-counter')}
            className={location.pathname === '/days-counter' ? 'footer-link active' : 'footer-link'}
          >
            {t('daysCounter')}
          </button>
          <button 
            onClick={() => handleLinkClick('/percent-calculator')}
            className={location.pathname === '/percent-calculator' ? 'footer-link active' : 'footer-link'}
          >
            {t('percentCalculator')}
          </button>
        </nav>

        <hr className="footer-divider" />

        <nav className="footer-nav">
          <button 
            onClick={() => handleLinkClick('/flag-guess')}
            className={location.pathname === '/flag-guess' ? 'footer-link active' : 'footer-link'}
          >
            {t('flagGuess')}
          </button>
          <button 
            onClick={() => handleLinkClick('/capital-guess')}
            className={location.pathname === '/capital-guess' ? 'footer-link active' : 'footer-link'}
          >
            {t('capitalGuess')}
          </button>
        </nav>
        <div className="footer-info">
          <p>&copy; 2025 CalcLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
