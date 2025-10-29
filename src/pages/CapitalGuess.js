import React, { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import './Calculator.css';

const CapitalGuess = () => {
  const { t } = useLocale();
  const [currentCountry, setCurrentCountry] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const countries = [
    { country: 'United States', countryRu: 'США', capital: 'Washington', capitalRu: 'Вашингтон' },
    { country: 'United Kingdom', countryRu: 'Великобритания', capital: 'London', capitalRu: 'Лондон' },
    { country: 'France', countryRu: 'Франция', capital: 'Paris', capitalRu: 'Париж' },
    { country: 'Germany', countryRu: 'Германия', capital: 'Berlin', capitalRu: 'Берлин' },
    { country: 'Italy', countryRu: 'Италия', capital: 'Rome', capitalRu: 'Рим' },
    { country: 'Spain', countryRu: 'Испания', capital: 'Madrid', capitalRu: 'Мадрид' },
    { country: 'Portugal', countryRu: 'Португалия', capital: 'Lisbon', capitalRu: 'Лиссабон' },
    { country: 'Netherlands', countryRu: 'Нидерланды', capital: 'Amsterdam', capitalRu: 'Амстердам' },
    { country: 'Belgium', countryRu: 'Бельгия', capital: 'Brussels', capitalRu: 'Брюссель' },
    { country: 'Switzerland', countryRu: 'Швейцария', capital: 'Bern', capitalRu: 'Берн' },
    { country: 'Austria', countryRu: 'Австрия', capital: 'Vienna', capitalRu: 'Вена' },
    { country: 'Poland', countryRu: 'Польша', capital: 'Warsaw', capitalRu: 'Варшава' },
    { country: 'Czech Republic', countryRu: 'Чехия', capital: 'Prague', capitalRu: 'Прага' },
    { country: 'Hungary', countryRu: 'Венгрия', capital: 'Budapest', capitalRu: 'Будапешт' },
    { country: 'Romania', countryRu: 'Румыния', capital: 'Bucharest', capitalRu: 'Бухарест' },
    { country: 'Bulgaria', countryRu: 'Болгария', capital: 'Sofia', capitalRu: 'София' },
    { country: 'Greece', countryRu: 'Греция', capital: 'Athens', capitalRu: 'Афины' },
    { country: 'Denmark', countryRu: 'Дания', capital: 'Copenhagen', capitalRu: 'Копенгаген' },
    { country: 'Sweden', countryRu: 'Швеция', capital: 'Stockholm', capitalRu: 'Стокгольм' },
    { country: 'Norway', countryRu: 'Норвегия', capital: 'Oslo', capitalRu: 'Осло' },
    { country: 'Finland', countryRu: 'Финляндия', capital: 'Helsinki', capitalRu: 'Хельсинки' },
    { country: 'Ireland', countryRu: 'Ирландия', capital: 'Dublin', capitalRu: 'Дублин' },
    { country: 'Iceland', countryRu: 'Исландия', capital: 'Reykjavik', capitalRu: 'Рейкьявик' },
    { country: 'Russia', countryRu: 'Россия', capital: 'Moscow', capitalRu: 'Москва' },
    { country: 'Ukraine', countryRu: 'Украина', capital: 'Kyiv', capitalRu: 'Киев' },
    { country: 'Belarus', countryRu: 'Беларусь', capital: 'Minsk', capitalRu: 'Минск' },
    { country: 'Turkey', countryRu: 'Турция', capital: 'Ankara', capitalRu: 'Анкара' },
    { country: 'Israel', countryRu: 'Израиль', capital: 'Jerusalem', capitalRu: 'Иерусалим' },
    { country: 'Saudi Arabia', countryRu: 'Саудовская Аравия', capital: 'Riyadh', capitalRu: 'Эр-Рияд' },
    { country: 'United Arab Emirates', countryRu: 'ОАЭ', capital: 'Abu Dhabi', capitalRu: 'Абу-Даби' },
    { country: 'Egypt', countryRu: 'Египет', capital: 'Cairo', capitalRu: 'Каир' },
    { country: 'South Africa', countryRu: 'Южная Африка', capital: 'Pretoria', capitalRu: 'Претория' },
    { country: 'Nigeria', countryRu: 'Нигерия', capital: 'Abuja', capitalRu: 'Абуджа' },
    { country: 'Kenya', countryRu: 'Кения', capital: 'Nairobi', capitalRu: 'Найроби' },
    { country: 'Ethiopia', countryRu: 'Эфиопия', capital: 'Addis Ababa', capitalRu: 'Аддис-Абеба' },
    { country: 'Morocco', countryRu: 'Марокко', capital: 'Rabat', capitalRu: 'Рабат' },
    { country: 'Algeria', countryRu: 'Алжир', capital: 'Algiers', capitalRu: 'Алжир' },
    { country: 'Tunisia', countryRu: 'Тунис', capital: 'Tunis', capitalRu: 'Тунис' },
    { country: 'India', countryRu: 'Индия', capital: 'New Delhi', capitalRu: 'Нью-Дели' },
    { country: 'Pakistan', countryRu: 'Пакистан', capital: 'Islamabad', capitalRu: 'Исламабад' },
    { country: 'Bangladesh', countryRu: 'Бангладеш', capital: 'Dhaka', capitalRu: 'Дакка' },
    { country: 'Sri Lanka', countryRu: 'Шри-Ланка', capital: 'Sri Jayawardenepura Kotte', capitalRu: 'Шри-Джаяварденепура-Котте' },
    { country: 'Nepal', countryRu: 'Непал', capital: 'Kathmandu', capitalRu: 'Катманду' },
    { country: 'China', countryRu: 'Китай', capital: 'Beijing', capitalRu: 'Пекин' },
    { country: 'Japan', countryRu: 'Япония', capital: 'Tokyo', capitalRu: 'Токио' },
    { country: 'South Korea', countryRu: 'Южная Корея', capital: 'Seoul', capitalRu: 'Сеул' },
    { country: 'Indonesia', countryRu: 'Индонезия', capital: 'Jakarta', capitalRu: 'Джакарта' },
    { country: 'Malaysia', countryRu: 'Малайзия', capital: 'Kuala Lumpur', capitalRu: 'Куала-Лумпур' },
    { country: 'Thailand', countryRu: 'Таиланд', capital: 'Bangkok', capitalRu: 'Бангкок' },
    { country: 'Vietnam', countryRu: 'Вьетнам', capital: 'Hanoi', capitalRu: 'Ханой' },
    { country: 'Philippines', countryRu: 'Филиппины', capital: 'Manila', capitalRu: 'Манила' },
    { country: 'Singapore', countryRu: 'Сингапур', capital: 'Singapore', capitalRu: 'Сингапур' },
    { country: 'Australia', countryRu: 'Австралия', capital: 'Canberra', capitalRu: 'Канберра' },
    { country: 'New Zealand', countryRu: 'Новая Зеландия', capital: 'Wellington', capitalRu: 'Веллингтон' },
    { country: 'Canada', countryRu: 'Канада', capital: 'Ottawa', capitalRu: 'Оттава' },
    { country: 'Mexico', countryRu: 'Мексика', capital: 'Mexico City', capitalRu: 'Мехико' },
    { country: 'Argentina', countryRu: 'Аргентина', capital: 'Buenos Aires', capitalRu: 'Буэнос-Айрес' },
    { country: 'Chile', countryRu: 'Чили', capital: 'Santiago', capitalRu: 'Сантьяго' },
    { country: 'Colombia', countryRu: 'Колумбия', capital: 'Bogotá', capitalRu: 'Богота' },
    { country: 'Peru', countryRu: 'Перу', capital: 'Lima', capitalRu: 'Лима' },
    { country: 'Venezuela', countryRu: 'Венесуэла', capital: 'Caracas', capitalRu: 'Каракас' },
    { country: 'Uruguay', countryRu: 'Уругвай', capital: 'Montevideo', capitalRu: 'Монтевидео' },
    { country: 'Paraguay', countryRu: 'Парагвай', capital: 'Asunción', capitalRu: 'Асунсьон' },
    { country: 'Bolivia', countryRu: 'Боливия', capital: 'La Paz', capitalRu: 'Ла-Пас' }
  ];

  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setScore(0);
    setTotalQuestions(0);
    setUserAnswer('');
    setFeedback('');
    getRandomCountry();
  };

  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setCurrentCountry(countries[randomIndex]);
    setUserAnswer('');
    setFeedback('');
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    const answer = userAnswer.toLowerCase().trim();
    const english = currentCountry.capital.toLowerCase();
    const russian = currentCountry.capitalRu.toLowerCase();

    const isCorrect = answer === english || answer === russian;
    const newScore = isCorrect ? score + 1 : score;
    const newTotal = totalQuestions + 1;

    setScore(newScore);
    setTotalQuestions(newTotal);

    if (isCorrect) {
      setFeedback(t('correctAnswer'));
    } else {
      setFeedback(`${t('wrongAnswer')} ${t('correctCapital')}: ${currentCountry.capital} / ${currentCountry.capitalRu}`);
    }

    if (newTotal >= 10) {
      setGameEnded(true);
    } else {
      setTimeout(() => {
        getRandomCountry();
      }, 2000);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameEnded(false);
    setCurrentCountry(null);
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
        <h1>{t('capitalGuess')}</h1>

        {!gameStarted ? (
          <div className="game-intro">
            <p>{t('CapitalGuessDescription')}</p>
            <button onClick={startGame} className="calculate-btn">
              {t('startGame')}
            </button>
          </div>
        ) : !gameEnded ? (
          <div className="game-content">
            <div className="score-display">
              <span>{t('score')}: {score}/{totalQuestions}</span>
            </div>

            <div className="question-display" style={{ textAlign: 'center', marginBottom: 16 }}>
              <strong>{t('correctCountry')} </strong>
              <span>{currentCountry?.country} / {currentCountry?.countryRu}</span>
            </div>

            <form onSubmit={checkAnswer} className="calculator-form">
              <div className="form-group">
                <label>{t('enterCapitalName')}</label>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder={t('capitalNamePlaceholder')}
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

export default CapitalGuess;


