import React, { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import './Calculator.css';

const CompoundInterest = () => {
  const { t } = useLocale();
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [additionalAmount, setAdditionalAmount] = useState('0');
  const [frequency, setFrequency] = useState('monthly');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    
    const principalValue = parseFloat(principal);
    const rateValue = parseFloat(rate);
    const yearsValue = parseFloat(years);
    const additionalValue = parseFloat(additionalAmount) || 0;

    if (isNaN(principalValue) || isNaN(rateValue) || isNaN(yearsValue)) {
      setResult(null);
      return;
    }

    const monthlyRate = rateValue / 12 / 100;
    const totalMonths = yearsValue * 12;
    let futureValue = principalValue * Math.pow(1 + monthlyRate, totalMonths);
    
    // Calculate recurring investments
    let totalInvested = principalValue;
    if (additionalValue > 0) {
      const periodsPerYear = frequency === 'daily' ? 365 : 
                              frequency === 'weekly' ? 52 : 
                              frequency === 'monthly' ? 12 : 1;
      const periodsPerMonth = periodsPerYear / 12;
      
      for (let month = 0; month < totalMonths; month++) {
        const additionalThisMonth = additionalValue * periodsPerMonth;
        totalInvested += additionalThisMonth;
        
        const remainingMonths = totalMonths - month;
        futureValue += additionalThisMonth * Math.pow(1 + monthlyRate, remainingMonths);
      }
    }

    const totalInterest = futureValue - totalInvested;
    const totalInvestedAmount = totalInvested - principalValue;

    setResult({
      futureValue: futureValue.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalInvested: totalInvested.toFixed(2),
      totalInvestedAmount: totalInvestedAmount > 0 ? totalInvestedAmount.toFixed(2) : '0.00'
    });
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h1>{t('compoundInterest')}</h1>
         <div id="yandex_rtb_R-A-17602391-1" style={{maxWidth: "100%", border: "2px solid green", borderRadius: 10, padding: 7}}></div>
        <hr className="section-divider" />
        <form onSubmit={calculate} className="calculator-form">
          <div className="form-group">
            <label>{t('amount')}</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="10000"
              required
            />
          </div>

          <div className="form-group">
            <label>{t('rate')}</label>
            <input
              type="number"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="5"
              required
            />
          </div>

          <div className="form-group">
            <label>{t('years')}</label>
            <input
              type="number"
              step="0.1"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="10"
              required
            />
          </div>

          <div className="form-group">
            <label>{t('additionalInvestment')}</label>
            <input
              type="number"
              step="0.01"
              value={additionalAmount}
              onChange={(e) => setAdditionalAmount(e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="form-group">
            <label>{t('frequency')}</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="form-select"
            >
              <option value="monthly">{t('monthly')}</option>
              <option value="weekly">{t('weekly')}</option>
              <option value="daily">{t('daily')}</option>
              <option value="yearly">{t('yearly')}</option>
            </select>
          </div>

          <button type="submit" className="calculate-btn">
            {t('calculate')}
          </button>
        </form>

        {result && (
          <div className="result-container">
            <h2>{t('result')}</h2>
            <div className="result-item">
              <span>{t('futureValue')}:</span>
              <strong>${result.futureValue}</strong>
            </div>
            {parseFloat(result.totalInvestedAmount) > 0 && (
              <div className="result-item">
                <span>Total Additional Invested:</span>
                <strong>${result.totalInvestedAmount}</strong>
              </div>
            )}
            <div className="result-item">
              <span>{t('totalInterest')}:</span>
              <strong>${result.totalInterest}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompoundInterest;

