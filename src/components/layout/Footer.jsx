import React from 'react';
import { Github, Send, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Munisbek Raimjonov</h3>
                        <p className="mt-2 text-slate-500 dark:text-slate-400">Frontend Developer. Creating digital experiences.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/munisbekraimjonov33-spec" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://t.me/Munis_Raimjanov" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                            <Send size={24} />
                        </a>
                        <a href="https://youtube.com/@Zortex_play" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600 transition-colors">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center md:text-left">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Munisbek Raimjonov. Barcha huquqlar himoyalangan.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
