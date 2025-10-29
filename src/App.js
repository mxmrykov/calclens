import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompoundInterest from './pages/CompoundInterest';
import AgeCalculator from './pages/AgeCalculator';
import DaysCounter from './pages/DaysCounter';
import PercentCalculator from './pages/PercentCalculator';
import FlagGuess from './pages/FlagGuess';
import CapitalGuess from './pages/CapitalGuess';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compound-interest" element={<CompoundInterest />} />
                <Route path="/age-calculator" element={<AgeCalculator />} />
                <Route path="/days-counter" element={<DaysCounter />} />
                <Route path="/percent-calculator" element={<PercentCalculator />} />
                <Route path="/flag-guess" element={<FlagGuess />} />
                <Route path="/capital-guess" element={<CapitalGuess />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
