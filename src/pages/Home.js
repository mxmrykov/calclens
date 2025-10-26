import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';
import './Home.css';

const Home = () => {
  const { t } = useLocale();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>calclens</h1>
        
        <div className="calculator-grid">
          <Link to="/compound-interest" className="calculator-card-link">
            <div className="card">
              <div className="card-icon">💰</div>
              <h3>{t('compoundInterest')}</h3>
              <p>Calculate compound interest and see how your money grows over time with recurring investments</p>
            </div>
          </Link>

          <Link to="/age-calculator" className="calculator-card-link">
            <div className="card">
              <div className="card-icon">🎂</div>
              <h3>{t('ageCalculator')}</h3>
              <p>Find out your exact age in years, months, and days</p>
            </div>
          </Link>

          <Link to="/days-counter" className="calculator-card-link">
            <div className="card">
              <div className="card-icon">⏰</div>
              <h3>{t('daysCounter')}</h3>
              <p>Count the days until or since any important date</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

