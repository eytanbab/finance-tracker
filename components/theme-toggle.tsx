'use client';

import { useTheme } from 'next-themes';
import { Toggle } from './ui/toggle';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      size='sm'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? (
        <Sun className='size-4 ' />
      ) : (
        <Moon className='size-4 ' />
      )}
    </Toggle>
  );
};
