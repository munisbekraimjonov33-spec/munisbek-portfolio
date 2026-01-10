import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import useStore from '../../store/useStore';

import ScrollProgress from '../common/ScrollProgress';


import AuroraBackground from '../common/AuroraBackground';

const Layout = ({ children }) => {
    const { isDarkMode } = useStore();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-500 font-sans relative">
            <AuroraBackground />
            <ScrollProgress />
            <Header />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
