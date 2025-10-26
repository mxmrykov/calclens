import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLocale } from '../contexts/LocaleContext';
import logo from '../view.png';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, locale, toggleLocale } = useLocale();
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="calclens" className="logo" />
        </Link>
        
        <nav className="nav">
          <Link 
            to="/compound-interest" 
            className={location.pathname === '/compound-interest' ? 'nav-link active' : 'nav-link'}
          >
            {t('compoundInterest')}
          </Link>
          <Link 
            to="/age-calculator" 
            className={location.pathname === '/age-calculator' ? 'nav-link active' : 'nav-link'}
          >
            {t('ageCalculator')}
          </Link>
          <Link 
            to="/days-counter" 
            className={location.pathname === '/days-counter' ? 'nav-link active' : 'nav-link'}
          >
            {t('daysCounter')}
          </Link>
        </nav>

        <div className="header-controls">
          <button onClick={toggleLocale} className="control-btn" title={t('language')}>
            {locale === 'en' ? 'RU' : 'EN'}
          </button>
          <button onClick={toggleTheme} className="control-btn" title={t('theme')}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

