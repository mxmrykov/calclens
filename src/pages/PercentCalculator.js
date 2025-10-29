import React, { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import './Calculator.css';

const PercentCalculator = () => {
  const { t } = useLocale();
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);
  const [calculationType, setCalculationType] = useState('percentageOf');

  const calculate = (e) => {
    e.preventDefault();
    
    const valueNum = parseFloat(value);
    const percentageNum = parseFloat(percentage);

    if (isNaN(valueNum) || isNaN(percentageNum)) {
      setResult(null);
      return;
    }

    let calculatedResult;
    let description;

    switch (calculationType) {
      case 'percentageOf':
        calculatedResult = (valueNum * percentageNum) / 100;
        description = `${percentageNum}% of ${valueNum}`;
        break;
      case 'whatPercentage':
        calculatedResult = (percentageNum / valueNum) * 100;
        description = `${percentageNum} is what % of ${valueNum}`;
        break;
      case 'percentageChange':
        calculatedResult = ((percentageNum - valueNum) / valueNum) * 100;
        description = `Percentage change from ${valueNum} to ${percentageNum}`;
        break;
      case 'addPercentage':
        calculatedResult = valueNum + (valueNum * percentageNum / 100);
        description = `${valueNum} + ${percentageNum}%`;
        break;
      case 'subtractPercentage':
        calculatedResult = valueNum - (valueNum * percentageNum / 100);
        description = `${valueNum} - ${percentageNum}%`;
        break;
      default:
        return;
    }

    setResult({
      value: calculatedResult.toFixed(2),
      description: description
    });
  };

  const getInputLabels = () => {
    switch (calculationType) {
      case 'percentageOf':
        return { first: t('value'), second: t('percentage') };
      case 'whatPercentage':
        return { first: t('totalValue'), second: t('partValue') };
      case 'percentageChange':
        return { first: t('originalValue'), second: t('newValue') };
      case 'addPercentage':
        return { first: t('value'), second: t('percentageToAdd') };
      case 'subtractPercentage':
        return { first: t('value'), second: t('percentageToSubtract') };
      default:
        return { first: t('value'), second: t('percentage') };
    }
  };

  const inputLabels = getInputLabels();

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <div id="yandex_rtb_R-A-17602391-1" style={{maxWidth: "100%", border: "2px solid green", borderRadius: 10, padding: 7}}></div>
        <hr className="section-divider" />
        <h1>{t('percentCalculator')}</h1>
        
        <form onSubmit={calculate} className="calculator-form">
          <div className="form-group">
            <label>{t('calculationType')}</label>
            <select
              value={calculationType}
              onChange={(e) => setCalculationType(e.target.value)}
              className="form-select"
            >
              <option value="percentageOf">{t('percentageOf')}</option>
              <option value="whatPercentage">{t('whatPercentage')}</option>
              <option value="percentageChange">{t('percentageChange')}</option>
              <option value="addPercentage">{t('addPercentage')}</option>
              <option value="subtractPercentage">{t('subtractPercentage')}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{inputLabels.first}</label>
            <input
              type="number"
              step="0.01"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="100"
              required
            />
          </div>

          <div className="form-group">
            <label>{inputLabels.second}</label>
            <input
              type="number"
              step="0.01"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="20"
              required
            />
          </div>

          <button type="submit" className="calculate-btn">
            {t('calculate')}
          </button>
        </form>

        {result && (
          <div className="result-container">
            <h2>{t('result')}</h2>
            <div className="result-item">
              <span>{result.description}:</span>
              <strong>{result.value}</strong>
            </div>
            {calculationType === 'whatPercentage' && (
              <div className="result-item">
                <span>{t('percentage')}:</span>
                <strong>{result.value}%</strong>
              </div>
            )}
            {calculationType === 'percentageChange' && (
              <div className="result-item">
                <span>{t('percentageChange')}:</span>
                <strong>{result.value}%</strong>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentCalculator;


