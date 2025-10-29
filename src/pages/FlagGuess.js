import React, { useState, useEffect } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import './Calculator.css';

const FlagGuess = () => {
  const { t } = useLocale();
  const [currentFlag, setCurrentFlag] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const flags = [
    { country: 'United States', countryRu: 'США', flag: 'https://flagcdn.com/w320/us.png' },
    { country: 'United Kingdom', countryRu: 'Великобритания', flag: 'https://flagcdn.com/w320/gb.png' },
    { country: 'France', countryRu: 'Франция', flag: 'https://flagcdn.com/w320/fr.png' },
    { country: 'Germany', countryRu: 'Германия', flag: 'https://flagcdn.com/w320/de.png' },
    { country: 'Japan', countryRu: 'Япония', flag: 'https://flagcdn.com/w320/jp.png' },
    { country: 'China', countryRu: 'Китай', flag: 'https://flagcdn.com/w320/cn.png' },
    { country: 'Russia', countryRu: 'Россия', flag: 'https://flagcdn.com/w320/ru.png' },
    { country: 'Brazil', countryRu: 'Бразилия', flag: 'https://flagcdn.com/w320/br.png' },
    { country: 'India', countryRu: 'Индия', flag: 'https://flagcdn.com/w320/in.png' },
    { country: 'Canada', countryRu: 'Канада', flag: 'https://flagcdn.com/w320/ca.png' },
    { country: 'Australia', countryRu: 'Австралия', flag: 'https://flagcdn.com/w320/au.png' },
    { country: 'Italy', countryRu: 'Италия', flag: 'https://flagcdn.com/w320/it.png' },
    { country: 'Spain', countryRu: 'Испания', flag: 'https://flagcdn.com/w320/es.png' },
    { country: 'Mexico', countryRu: 'Мексика', flag: 'https://flagcdn.com/w320/mx.png' },
    { country: 'South Korea', countryRu: 'Южная Корея', flag: 'https://flagcdn.com/w320/kr.png' },
    { country: 'Netherlands', countryRu: 'Нидерланды', flag: 'https://flagcdn.com/w320/nl.png' },
    { country: 'Sweden', countryRu: 'Швеция', flag: 'https://flagcdn.com/w320/se.png' },
    { country: 'Norway', countryRu: 'Норвегия', flag: 'https://flagcdn.com/w320/no.png' },
    { country: 'Switzerland', countryRu: 'Швейцария', flag: 'https://flagcdn.com/w320/ch.png' },
    { country: 'Turkey', countryRu: 'Турция', flag: 'https://flagcdn.com/w320/tr.png' },
    { country: 'Portugal', countryRu: 'Португалия', flag: 'https://flagcdn.com/w320/pt.png' },
    { country: 'Poland', countryRu: 'Польша', flag: 'https://flagcdn.com/w320/pl.png' },
    { country: 'Czech Republic', countryRu: 'Чехия', flag: 'https://flagcdn.com/w320/cz.png' },
    { country: 'Austria', countryRu: 'Австрия', flag: 'https://flagcdn.com/w320/at.png' },
    { country: 'Belgium', countryRu: 'Бельгия', flag: 'https://flagcdn.com/w320/be.png' },
    { country: 'Denmark', countryRu: 'Дания', flag: 'https://flagcdn.com/w320/dk.png' },
    { country: 'Finland', countryRu: 'Финляндия', flag: 'https://flagcdn.com/w320/fi.png' },
    { country: 'Ireland', countryRu: 'Ирландия', flag: 'https://flagcdn.com/w320/ie.png' },
    { country: 'Greece', countryRu: 'Греция', flag: 'https://flagcdn.com/w320/gr.png' },
    { country: 'Hungary', countryRu: 'Венгрия', flag: 'https://flagcdn.com/w320/hu.png' },
    { country: 'Romania', countryRu: 'Румыния', flag: 'https://flagcdn.com/w320/ro.png' },
    { country: 'Bulgaria', countryRu: 'Болгария', flag: 'https://flagcdn.com/w320/bg.png' },
    { country: 'Slovakia', countryRu: 'Словакия', flag: 'https://flagcdn.com/w320/sk.png' },
    { country: 'Slovenia', countryRu: 'Словения', flag: 'https://flagcdn.com/w320/si.png' },
    { country: 'Croatia', countryRu: 'Хорватия', flag: 'https://flagcdn.com/w320/hr.png' },
    { country: 'Serbia', countryRu: 'Сербия', flag: 'https://flagcdn.com/w320/rs.png' },
    { country: 'Ukraine', countryRu: 'Украина', flag: 'https://flagcdn.com/w320/ua.png' },
    { country: 'Belarus', countryRu: 'Беларусь', flag: 'https://flagcdn.com/w320/by.png' },
    { country: 'Portugal', countryRu: 'Португалия', flag: 'https://flagcdn.com/w320/pt.png' },
    { country: 'Iceland', countryRu: 'Исландия', flag: 'https://flagcdn.com/w320/is.png' },
    { country: 'Estonia', countryRu: 'Эстония', flag: 'https://flagcdn.com/w320/ee.png' },
    { country: 'Latvia', countryRu: 'Латвия', flag: 'https://flagcdn.com/w320/lv.png' },
    { country: 'Lithuania', countryRu: 'Литва', flag: 'https://flagcdn.com/w320/lt.png' },
    { country: 'Portugal', countryRu: 'Португалия', flag: 'https://flagcdn.com/w320/pt.png' },
    { country: 'New Zealand', countryRu: 'Новая Зеландия', flag: 'https://flagcdn.com/w320/nz.png' },
    { country: 'Argentina', countryRu: 'Аргентина', flag: 'https://flagcdn.com/w320/ar.png' },
    { country: 'Chile', countryRu: 'Чили', flag: 'https://flagcdn.com/w320/cl.png' },
    { country: 'Colombia', countryRu: 'Колумбия', flag: 'https://flagcdn.com/w320/co.png' },
    { country: 'Peru', countryRu: 'Перу', flag: 'https://flagcdn.com/w320/pe.png' },
    { country: 'Venezuela', countryRu: 'Венесуэла', flag: 'https://flagcdn.com/w320/ve.png' },
    { country: 'Uruguay', countryRu: 'Уругвай', flag: 'https://flagcdn.com/w320/uy.png' },
    { country: 'Paraguay', countryRu: 'Парагвай', flag: 'https://flagcdn.com/w320/py.png' },
    { country: 'Bolivia', countryRu: 'Боливия', flag: 'https://flagcdn.com/w320/bo.png' },
    { country: 'Ecuador', countryRu: 'Эквадор', flag: 'https://flagcdn.com/w320/ec.png' },
    { country: 'Saudi Arabia', countryRu: 'Саудовская Аравия', flag: 'https://flagcdn.com/w320/sa.png' },
    { country: 'United Arab Emirates', countryRu: 'ОАЭ', flag: 'https://flagcdn.com/w320/ae.png' },
    { country: 'Israel', countryRu: 'Израиль', flag: 'https://flagcdn.com/w320/il.png' },
    { country: 'Egypt', countryRu: 'Египет', flag: 'https://flagcdn.com/w320/eg.png' },
    { country: 'South Africa', countryRu: 'Южная Африка', flag: 'https://flagcdn.com/w320/za.png' },
    { country: 'Nigeria', countryRu: 'Нигерия', flag: 'https://flagcdn.com/w320/ng.png' },
    { country: 'Kenya', countryRu: 'Кения', flag: 'https://flagcdn.com/w320/ke.png' },
    { country: 'Ethiopia', countryRu: 'Эфиопия', flag: 'https://flagcdn.com/w320/et.png' },
    { country: 'Morocco', countryRu: 'Марокко', flag: 'https://flagcdn.com/w320/ma.png' },
    { country: 'Algeria', countryRu: 'Алжир', flag: 'https://flagcdn.com/w320/dz.png' },
    { country: 'Tunisia', countryRu: 'Тунис', flag: 'https://flagcdn.com/w320/tn.png' },
    { country: 'Turkey', countryRu: 'Турция', flag: 'https://flagcdn.com/w320/tr.png' },
    { country: 'Iran', countryRu: 'Иран', flag: 'https://flagcdn.com/w320/ir.png' },
    { country: 'Iraq', countryRu: 'Ирак', flag: 'https://flagcdn.com/w320/iq.png' },
    { country: 'Pakistan', countryRu: 'Пакистан', flag: 'https://flagcdn.com/w320/pk.png' },
    { country: 'Bangladesh', countryRu: 'Бангладеш', flag: 'https://flagcdn.com/w320/bd.png' },
    { country: 'Sri Lanka', countryRu: 'Шри-Ланка', flag: 'https://flagcdn.com/w320/lk.png' },
    { country: 'Nepal', countryRu: 'Непал', flag: 'https://flagcdn.com/w320/np.png' },
    { country: 'Indonesia', countryRu: 'Индонезия', flag: 'https://flagcdn.com/w320/id.png' },
    { country: 'Malaysia', countryRu: 'Малайзия', flag: 'https://flagcdn.com/w320/my.png' },
    { country: 'Thailand', countryRu: 'Таиланд', flag: 'https://flagcdn.com/w320/th.png' },
    { country: 'Vietnam', countryRu: 'Вьетнам', flag: 'https://flagcdn.com/w320/vn.png' },
    { country: 'Philippines', countryRu: 'Филиппины', flag: 'https://flagcdn.com/w320/ph.png' },
    { country: 'Singapore', countryRu: 'Сингапур', flag: 'https://flagcdn.com/w320/sg.png' },
    { country: 'New Zealand', countryRu: 'Новая Зеландия', flag: 'https://flagcdn.com/w320/nz.png' }
  ];

  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setScore(0);
    setTotalQuestions(0);
    setUserAnswer('');
    setFeedback('');
    getRandomFlag();
  };

  const getRandomFlag = () => {
    const randomIndex = Math.floor(Math.random() * flags.length);
    setCurrentFlag(flags[randomIndex]);
    setUserAnswer('');
    setFeedback('');
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    
    if (!userAnswer.trim()) return;

    const userAnswerLower = userAnswer.toLowerCase().trim();
    const englishAnswer = currentFlag.country.toLowerCase();
    const russianAnswer = currentFlag.countryRu.toLowerCase();
    
    const isCorrect = userAnswerLower === englishAnswer || userAnswerLower === russianAnswer;
    const newScore = isCorrect ? score + 1 : score;
    const newTotal = totalQuestions + 1;
    
    setScore(newScore);
    setTotalQuestions(newTotal);
    
    if (isCorrect) {
      setFeedback(t('correctAnswer'));
    } else {
      setFeedback(`${t('wrongAnswer')} ${t('correctCountry')}: ${currentFlag.country} / ${currentFlag.countryRu}`);
    }

    if (newTotal >= 10) {
      setGameEnded(true);
    } else {
      setTimeout(() => {
        getRandomFlag();
      }, 2000);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameEnded(false);
    setCurrentFlag(null);
    setUserAnswer('');
    setScore(0);
    setTotalQuestions(0);
    setFeedback('');
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <div id="yandex_rtb_R-A-17602391-1" style={{maxWidth: "100%", border: "2px solid green", borderRadius: 10, padding: 7}}></div>
        <hr className="section-divider" />
        <h1>{t('flagGuess')}</h1>
        
        {!gameStarted ? (
          <div className="game-intro">
            <p>{t('FlagGuessDescription')}</p>
            <button onClick={startGame} className="calculate-btn">
              {t('startGame')}
            </button>
          </div>
        ) : !gameEnded ? (
          <div className="game-content">
            <div className="score-display">
              <span>{t('score')}: {score}/{totalQuestions}</span>
            </div>
            
            <div className="flag-display">
              <img 
                src={currentFlag?.flag} 
                alt={`Flag of ${currentFlag?.country}`}
                className="flag-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="flag-emoji" style={{ display: 'none' }}>
                {currentFlag?.flag}
              </div>
            </div>

            <form onSubmit={checkAnswer} className="calculator-form">
              <div className="form-group">
                <label>{t('enterCountryName')}</label>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder={t('countryNamePlaceholder')}
                  autoFocus
                  required
                />
              </div>

              <button type="submit" className="calculate-btn">
                {t('submitAnswer')}
              </button>
            </form>

            {feedback && (
              <div className={`feedback ${feedback.includes(t('correctAnswer')) ? 'correct' : 'incorrect'}`}>
                {feedback}
              </div>
            )}
          </div>
        ) : (
          <div className="game-results">
            <h2>{t('gameOver')}</h2>
            <div className="final-score">
              <p>{t('finalScore')}: {score}/10</p>
              <p className={`score-message ${score >= 7 ? 'good' : score >= 5 ? 'average' : 'poor'}`}>
                {score >= 7 ? t('excellent') : score >= 5 ? t('goodJob') : t('keepPracticing')}
              </p>
            </div>
            <button onClick={resetGame} className="calculate-btn">
              {t('playAgain')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlagGuess;
