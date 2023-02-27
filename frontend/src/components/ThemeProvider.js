import React, { useState } from 'react';
import SubmitContext from '../context/SubmitContext';

export default function ThemeProvider({ children }) {

  const [theme, setTheme] = useState();

  function setMessage(message, className) {
    setMessageLog(message);
    setClassName(className);
  }

  return (
    <SubmitContext.Provider value={{ theme }}>
      {children}
    </SubmitContext.Provider>
  );
}
