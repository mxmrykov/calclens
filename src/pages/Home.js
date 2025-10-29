import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';
import './Home.css';

const Home = () => {
  const { t } = useLocale();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="calculator-grid">
          <Link to="/compound-interest" className="calculator-card-link">
            <div className="card">
              <div className="card-icon">💰</div>
              <h3>{t('compoundInterest')}</h3>
              <p>{t('CompoundInterestDescription')}</p>
            </div>
          </Link>

          <Link to="/age-calculator" className="calculator-card-link">
            <div className="card">
              <div className="card-icon">🎂</div>
              <h3>{t('ageCalculator')}</h3>
              <p>{t('AgeCalculatorDescription')}</p>
            </div>
          </Link>

          <Link to="/days-counter" className="calculator-card-link">
            <div className="card">
              <div className="card-icon">⏰</div>
              <h3>{t('daysCounter')}</h3>
              <p>{t('DaysCounterDescription')}</p>
            </div>
          </Link>
        </div>

        <hr className="section-divider" />

        <div className="calculator-grid">
          <Link to="/flag-guess" className="calculator-card-link">
            <div className="card">
              <div className="card-icon">🚩</div>
              <h3>{t('flagGuess')}</h3>
              <p>{t('FlagGuessDescription')}</p>
            </div>
          </Link>

          <Link to="/capital-guess" className="calculator-card-link">
            <div className="card">
              <div className="card-icon">🏛️</div>
              <h3>{t('capitalGuess')}</h3>
              <p>{t('CapitalGuessDescription')}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

