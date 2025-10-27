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

