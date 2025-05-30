import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { theme } from '../constants/Colors';

export const useAppTheme = () => {
  const systemScheme = Appearance.getColorScheme(); // Detect system setting
  const [themeMode, setThemeMode] = useState(systemScheme || 'light');

  useEffect(() => {
    setThemeMode(systemScheme || 'light');
  }, [systemScheme]);

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return { appTheme: theme[themeMode], themeMode, toggleTheme };
};