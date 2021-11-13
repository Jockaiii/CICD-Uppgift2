import React, { useState } from "react";

const ThemeContext = React.createContext(); 

const MultiThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); 

  const switchTheme = (theme) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { MultiThemeProvider, ThemeContext };