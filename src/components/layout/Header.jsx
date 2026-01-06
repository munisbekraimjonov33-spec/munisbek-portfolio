import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStore from '../../store/useStore';
import { Menu, X, Sun, Moon } from 'lucide-react';
import classNames from 'classnames';

const Header = () => {
    const { isDarkMode, toggleTheme } = useStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Asosiy', path: '/' },
        { name: 'Loyihalar', path: '/projects' },
        { name: 'Haqida', path: '/about' },
        { name: 'Bog\'lanish', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Munisbek<span className="text-primary">.dev</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={classNames(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isActive(link.path) ? "text-primary" : "text-slate-600 dark:text-slate-300"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="mr-4 p-2 text-slate-500"
                        >
                            {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-600 dark:text-slate-300"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg animate-fade-in h-screen">
                    <div className="px-6 py-8 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={classNames(
                                    "block text-2xl font-bold",
                                    isActive(link.path)
                                        ? "text-primary"
                                        : "text-slate-800 dark:text-slate-200"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
