import { useCallback, useEffect, useState } from 'react';
import { getHours } from 'date-fns';
import useIsDarkMode from '@/store/darkMode';

export const useDarkMode = () => {
  const { value: isDarkMode, setValue: setIsDarkMode } = useIsDarkMode();

  // 重置
  const resetTheme = useCallback(() => {
    const isDarkMode =
      Array.from(document.documentElement.classList).includes('dark') ||
      document.body.hasAttribute('theme-mode');

    setIsDarkMode(isDarkMode);
  }, []);

  // 切换
  const toggleDarkMode = useCallback(() => {
    // 切换 tailwind darkMode
    document.documentElement.classList.toggle('dark');

    // 切换 semi design darkMode
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }

    resetTheme(); // 重置本地存储
  }, [resetTheme]);

  // 首次自动切换
  useEffect(() => {
    const isDarkMode =
      Array.from(document.documentElement.classList).includes('dark') ||
      document.body.hasAttribute('theme-mode');

    const shouldBeDark = getHours(Date.now()) >= 18;

    if (shouldBeDark && !isDarkMode) {
      toggleDarkMode(); // 自动切换为 dark
    } else {
      resetTheme(); // 不切换，仅重置本地存储
    }
  }, []);

  return { isDarkMode, toggleDarkMode };
};
