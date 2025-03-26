
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-all hover:bg-accent"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0">
        <Sun className="h-5 w-5 text-gold" />
      </div>
      <div className="absolute top-2 left-2 transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100">
        <Moon className="h-5 w-5 text-gold" />
      </div>
    </button>
  );
};
