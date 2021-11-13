import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "../../shared/provider/MultiThemeProvider";

const themes = {
    dark: {
      background: "#272823",
      title: "#6495ed",
      text: "#fff",
    },
    light: {
      background: "rgb(65, 170, 186)",
      title: "#ff6347",
      text: "#000",
    },
  };
  
  const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      transition: all 0.6s;
    }
  `;

  const MultiTheme = ({ children }) => {
    const { theme } = useContext(ThemeContext); 
    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  };
  
  export default MultiTheme;