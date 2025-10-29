import React, { createContext, useState, useContext, useEffect } from 'react';

const LocaleContext = createContext();

const translations = {
  en: {
    compoundInterest: 'Compound Interest Calculator',
    CompoundInterestDescription: 'Calculate the future value of an investment with compound interest',
    ageCalculator: 'Age Calculator',
    AgeCalculatorDescription: 'Find out age by date of birth',
    DaysCounterDescription: 'Count the days until or since any important date',
    daysCounter: 'Days Counter',
    amount: 'Initial Amount',
    rate: 'Interest Rate (%)',
    years: 'Years',
    calculate: 'Calculate',
    result: 'Result',
    futureValue: 'Future Value',
    totalInterest: 'Total Interest Earned',
    birthDate: 'Birth Date',
    age: 'Age',
    yearsOld: 'years old',
    targetDate: 'Target Date',
    daysLeft: 'days left',
    daysPassed: 'days passed',
    language: 'Language',
    theme: 'Theme',
    additionalInvestment: 'Additional Investment',
    frequency: 'Frequency',
    monthly: 'Monthly',
    weekly: 'Weekly',
    daily: 'Daily',
    yearly: 'Yearly',
    percentCalculator: 'Percent Calculator',
    PercentCalculatorDescription: 'Calculate percentages, percentage changes, and percentage operations',
    calculationType: 'Calculation Type',
    percentageOf: 'X% of Y',
    whatPercentage: 'X is what % of Y',
    percentageChange: 'Percentage Change',
    addPercentage: 'Add X% to Y',
    subtractPercentage: 'Subtract X% from Y',
    value: 'Value',
    percentage: 'Percentage (%)',
    totalValue: 'Total Value',
    partValue: 'Part Value',
    originalValue: 'Original Value',
    newValue: 'New Value',
    percentageToAdd: 'Percentage to Add (%)',
    percentageToSubtract: 'Percentage to Subtract (%)',
    flagGuess: 'Flag Guess Test',
    FlagGuessDescription: 'Test your knowledge of world flags',
    capitalGuess: 'Capital Guess Test',
    CapitalGuessDescription: 'Test your knowledge of world capitals',
    startGame: 'Start Game',
    score: 'Score',
    enterCountryName: 'Enter Country Name',
    countryNamePlaceholder: 'e.g., United States',
    enterCapital: 'Enter Capital',
    capitalNamePlaceholder: 'e.g., Paris',
    submitAnswer: 'Submit Answer',
    correctAnswer: 'Correct!',
    wrongAnswer: 'Wrong!',
    correctCountry: 'Country',
    correctCapital: 'Capital',
    gameOver: 'Game Over!',
    finalScore: 'Final Score',
    excellent: 'Excellent!',
    goodJob: 'Good job!',
    keepPracticing: 'Keep practicing!',
    playAgain: 'Play Again',
    enterCapitalName: 'Enter Capital Name'
  },
  ru: {
    compoundInterest: 'Калькулятор сложных процентов',
    CompoundInterestDescription: 'Рассчитайте будущую стоимость инвестиции с учетом сложных процентов',
    AgeCalculatorDescription: 'Узнать возраст по дате рождения',
    DaysCounterDescription: 'Подсчитайте дни до или с момента любой важной даты',
    ageCalculator: 'Калькулятор возраста',
    daysCounter: 'Счетчик дней',
    amount: 'Начальная сумма',
    rate: 'Процентная ставка (%)',
    years: 'Лет',
    calculate: 'Рассчитать',
    result: 'Результат',
    futureValue: 'Будущая стоимость',
    totalInterest: 'Заработанный процент',
    birthDate: 'Дата рождения',
    age: 'Возраст',
    yearsOld: 'лет',
    targetDate: 'Целевая дата',
    daysLeft: 'дней осталось',
    daysPassed: 'дней прошло',
    language: 'Язык',
    theme: 'Тема',
    additionalInvestment: 'Дополнительное вложение',
    frequency: 'Частота',
    monthly: 'Ежемесячно',
    weekly: 'Еженедельно',
    daily: 'Ежедневно',
    yearly: 'Ежегодно',
    percentCalculator: 'Калькулятор процентов',
    PercentCalculatorDescription: 'Рассчитайте проценты, изменения в процентах и процентные операции',
    calculationType: 'Тип расчета',
    percentageOf: 'X% от Y',
    whatPercentage: 'X это сколько % от Y',
    percentageChange: 'Изменение в процентах',
    addPercentage: 'Добавить X% к Y',
    subtractPercentage: 'Вычесть X% из Y',
    value: 'Значение',
    percentage: 'Процент (%)',
    totalValue: 'Общее значение',
    partValue: 'Часть значения',
    originalValue: 'Исходное значение',
    newValue: 'Новое значение',
    percentageToAdd: 'Процент для добавления (%)',
    percentageToSubtract: 'Процент для вычитания (%)',
    flagGuess: 'Тест на угадывание флагов',
    FlagGuessDescription: 'Проверьте свои знания флагов мира',
    capitalGuess: 'Тест на угадывание столиц',
    CapitalGuessDescription: 'Проверьте свои знания столиц мира',
    startGame: 'Начать игру',
    score: 'Счет',
    enterCountryName: 'Введите название страны',
    countryNamePlaceholder: 'например, Россия',
    enterCapital: 'Введите столицу',
    capitalNamePlaceholder: 'например, Москва',
    submitAnswer: 'Отправить ответ',
    correctAnswer: 'Правильно!',
    wrongAnswer: 'Неправильно!',
    correctCountry: 'Страна',
    correctCapital: 'Столица',
    gameOver: 'Игра окончена!',
    finalScore: 'Финальный счет',
    excellent: 'Отлично!',
    goodJob: 'Хорошая работа!',
    keepPracticing: 'Продолжайте практиковаться!',
    playAgain: 'Играть снова',
    enterCapitalName: 'Введите название столицы'
  }
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem('locale');
    return savedLocale || 'en';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const t = (key) => translations[locale][key] || key;

  const toggleLocale = () => {
    setLocale(prevLocale => prevLocale === 'en' ? 'ru' : 'en');
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

