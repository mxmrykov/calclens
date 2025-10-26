import React, { createContext, useState, useContext, useEffect } from 'react';

const LocaleContext = createContext();

const translations = {
  en: {
    compoundInterest: 'Compound Interest Calculator',
    ageCalculator: 'Age Calculator',
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
    yearly: 'Yearly'
  },
  ru: {
    compoundInterest: 'Калькулятор сложных процентов',
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
    yearly: 'Ежегодно'
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

