// src/context/NavbarThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for our Navbar theme
// 'dark' theme means the section background is dark (so navbar text should be light)
// 'light' theme means the section background is light (so navbar text should be dark)
type NavbarTheme = 'dark' | 'light'; 

interface NavbarThemeContextType {
  navbarTheme: NavbarTheme;
  setNavbarTheme: (theme: NavbarTheme) => void;
}

// Create the context
const NavbarThemeContext = createContext<NavbarThemeContextType | undefined>(undefined);

// Create a provider component
export const NavbarThemeProvider = ({ children }: { children: ReactNode }) => {
  // Default to 'dark' theme (assuming the initial HeroSection is dark, requiring light text)
  const [navbarTheme, setNavbarTheme] = useState<NavbarTheme>('dark');

  return (
    <NavbarThemeContext.Provider value={{ navbarTheme, setNavbarTheme }}>
      {children}
    </NavbarThemeContext.Provider>
  );
};

// Custom hook to use the Navbar theme context
export const useNavbarTheme = () => {
  const context = useContext(NavbarThemeContext);
  if (context === undefined) {
    throw new Error('useNavbarTheme must be used within a NavbarThemeProvider');
  }
  return context;
};