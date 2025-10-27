import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLocale();
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <Link 
            to="/compound-interest" 
            className={location.pathname === '/compound-interest' ? 'footer-link active' : 'footer-link'}
          >
            {t('compoundInterest')}
          </Link>
          <Link 
            to="/age-calculator" 
            className={location.pathname === '/age-calculator' ? 'footer-link active' : 'footer-link'}
          >
            {t('ageCalculator')}
          </Link>
          <Link 
            to="/days-counter" 
            className={location.pathname === '/days-counter' ? 'footer-link active' : 'footer-link'}
          >
            {t('daysCounter')}
          </Link>
        </nav>
        <div className="footer-info">
          <p>&copy; 2024 CalcLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
