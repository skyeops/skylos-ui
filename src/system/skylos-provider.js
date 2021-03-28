import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import CSSReset from "css-reset";
import defaultTheme from "theme";

export const SkylosContext = React.createContext();

export const useSkylosTheme = () => {
  const context = React.useContext(SkylosContext);

  if (!context) {
    throw new Error("useSkylosTheme must be used within the SkylosProvider");
  }

  return context;
};

export const SkylosProvider = (props) => {
  const { children, resetCSS = true, theme = defaultTheme } = props;
  const [customTheme, setCustomTheme] = React.useState({ ...theme });

  const updateTheme = React.useCallback((newTheme = {}) => {
    setCustomTheme((v) => ({ ...v, ...newTheme }));
  }, []);

  const value = React.useMemo(
    () => ({
      customTheme,
      updateTheme,
    }),
    [customTheme, updateTheme]
  );

  return (
    <SkylosContext.Provider value={value}>
      <ThemeProvider theme={customTheme}>
        {resetCSS && <CSSReset />}
        {children}
      </ThemeProvider>
    </SkylosContext.Provider>
  );
};
