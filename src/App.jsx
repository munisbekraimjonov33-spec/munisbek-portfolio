import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import PageTransition from './components/common/PageTransition';
import Preloader from './components/common/Preloader';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <Projects />
          </PageTransition>
        } />
        <Route path="/projects/:id" element={
          <PageTransition>
            <ProjectDetails />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" setLoading={setIsLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <AnimatedRoutes />
        </Layout>
      )}
    </Router>
  );
}

export default App;