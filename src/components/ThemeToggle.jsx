import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-14 h-7 bg-secondary border border-border rounded-full p-1 transition-all duration-300 hover:bg-accent hover:border-accent-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Track background indicators */}
      <div className="absolute inset-1 flex items-center justify-between px-1">
        <Sun className={`w-3 h-3 transition-all duration-300 ${theme === 'light' ? 'text-amber-500' : 'text-muted-foreground/40'}`} />
        <Moon className={`w-3 h-3 transition-all duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-muted-foreground/40'}`} />
      </div>
      
      {/* Sliding toggle */}
      <motion.div
        className="absolute inset-1 w-5 h-5 bg-background border border-border rounded-full shadow-md flex items-center justify-center z-10"
        animate={{
          x: theme === 'dark' ? 25 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: theme === 'dark' ? 40 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {theme === 'dark' ? (
            <Moon className="w-3 h-3 text-blue-400" />
          ) : (
            <Sun className="w-3 h-3 text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;