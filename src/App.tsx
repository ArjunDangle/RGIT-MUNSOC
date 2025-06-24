// src/App.tsx
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RGITMUN from "./pages/RGITMUN";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import useActiveSection from "./hooks/useActiveSection";

const queryClient = new QueryClient();

const App = () => {
  const sectionIds = ['home', 'about', 'quotes', 'leaders', 'rgitmun', 'highlights', 'committees', 'timeline', 'team_hero', 'president_desk', 'secretariat', 'core_team', 'contact_hero', 'contact_form', 'map', 'footer'];

  const sectionThemes = {
    home: 'dark',
    about: 'light',
    quotes: 'dark',
    leaders: 'light',
    rgitmun: 'light',
    highlights: 'dark',
    committees: 'light',
    timeline: 'light',
    team_hero: 'dark',
    president_desk: 'light',
    secretariat: 'light',
    core_team: 'light',
    contact_hero: 'light',
    contact_form: 'light',
    map: 'light',
    footer: 'dark'
  };

  const activeSection = useActiveSection(sectionIds);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-deep-onyx text-crisp-silver">
          <Navbar activeSection={sectionThemes[activeSection]} />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rgitmun25" element={<RGITMUN />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;