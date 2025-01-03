import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
    colors: {
      background: isDarkTheme ? '#1a1a1a' : '#ffffff',
      text: isDarkTheme ? '#ffffff' : '#000000',
      primary: isDarkTheme ? '#4da6ff' : '#0066cc',
      secondary: isDarkTheme ? '#404040' : '#f0f0f0',
      navbar: isDarkTheme ? '#2d2d2d' : '#f8f9fa'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
