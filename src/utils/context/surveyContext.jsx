/* eslint-disable linebreak-style */
import { createContext, useState, useMemo } from 'react';

export const SurveyContext = createContext();

export function SurveyProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers });
  };

  const value = useMemo(() => ({
    answers, saveAnswers,
  }), [answers]);

  return (
    <SurveyContext.Provider value={value}>
      {children}
    </SurveyContext.Provider>
  );
}
