import React, { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import './Calculator.css';

const AgeCalculator = () => {
  const { t } = useLocale();
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    
    if (!birthDate) {
      setAge(null);
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h1>{t('ageCalculator')}</h1>
         <div id="yandex_rtb_R-A-17602391-1" style={{maxWidth: "100%", border: "2px solid green", borderRadius: 10, padding: 7}}></div>
        <hr className="section-divider" />
        <form onSubmit={calculate} className="calculator-form">
          <div className="form-group">
            <label>{t('birthDate')}</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <button type="submit" className="calculate-btn">
            {t('calculate')}
          </button>
        </form>

        {age && (
          <div className="result-container">
            <h2>{t('age')}</h2>
            <div className="result-age">
              {age.years} {t('yearsOld')}
            </div>
            <div className="result-details">
              {age.months} months, {age.days} days
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;

