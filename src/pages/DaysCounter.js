import React, { useState, useEffect, useCallback } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import './Calculator.css';

const DaysCounter = () => {
  const { t } = useLocale();
  const [targetDate, setTargetDate] = useState('');
  const [days, setDays] = useState(null);

  const calculate = useCallback(() => {
    if (!targetDate) {
      setDays(null);
      return;
    }

    const target = new Date(targetDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diffTime = target - today;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    setDays(diffDays);
  }, [targetDate]);

  useEffect(() => {
    calculate();
    const interval = setInterval(calculate, 86400000); // Update daily
    
    return () => clearInterval(interval);
  }, [calculate]);

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <div id="yandex_rtb_R-A-17602391-1" style={{maxWidth: "100%", border: "2px solid green", borderRadius: 10, padding: 7}}></div>
        <hr className="section-divider" />
        <h1>{t('daysCounter')}</h1>
        
        <div className="calculator-form">
          <div className="form-group">
            <label>{t('targetDate')}</label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              required
            />
          </div>
        </div>

        {days !== null && targetDate && (
          <div className="result-container">
            <h2>{t('result')}</h2>
            {days === 0 ? (
              <div className="result-age">Today!</div>
            ) : days > 0 ? (
              <div className="result-age">{days} {t('daysLeft')}</div>
            ) : (
              <div className="result-age">{Math.abs(days)} {t('daysPassed')}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DaysCounter;

