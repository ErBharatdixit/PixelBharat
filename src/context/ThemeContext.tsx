import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeColor = 'blue' | 'purple' | 'emerald' | 'yellow' | 'rose' | 'cyan';

interface Theme {
      name: ThemeColor;
      primary: string;
      secondary: string;
}

const themes: Record<ThemeColor, Theme> = {
      blue: { name: 'blue', primary: '#3b82f6', secondary: '#8b5cf6' },
      purple: { name: 'purple', primary: '#a855f7', secondary: '#ec4899' },
      emerald: { name: 'emerald', primary: '#10b981', secondary: '#3b82f6' },
      yellow: { name: 'yellow', primary: '#eab308', secondary: '#f97316' },
      rose: { name: 'rose', primary: '#f43f5e', secondary: '#fb923c' },
      cyan: { name: 'cyan', primary: '#06b6d4', secondary: '#3b82f6' },
};

interface ThemeContextType {
      activeTheme: ThemeColor;
      setTheme: (theme: ThemeColor) => void;
      availableThemes: ThemeColor[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const [activeTheme, setActiveTheme] = useState<ThemeColor>(() => {
            const saved = localStorage.getItem('portfolio-theme');
            return (saved as ThemeColor) || 'blue';
      });

      useEffect(() => {
            const theme = themes[activeTheme];
            document.documentElement.style.setProperty('--accent-primary', theme.primary);
            document.documentElement.style.setProperty('--accent-secondary', theme.secondary);
            localStorage.setItem('portfolio-theme', activeTheme);
      }, [activeTheme]);

      const setTheme = (theme: ThemeColor) => {
            setActiveTheme(theme);
      };

      const availableThemes = Object.keys(themes) as ThemeColor[];

      return (
            <ThemeContext.Provider value={{ activeTheme, setTheme, availableThemes }}>
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
