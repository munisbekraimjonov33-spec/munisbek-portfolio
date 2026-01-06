import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        return ['All', ...new Set(projectsData.map(p => p.category))];
    }, []);

    const filteredProjects = useMemo(() => {
        return selectedCategory === 'All'
            ? projectsData
            : projectsData.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        Loyihalar
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg text-lg">
                        Har bir loyiha - bu yangi chaqiruv va mukammallikka intilish natijasidir.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                                    ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white'
                                    : 'bg-transparent text-slate-500 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Projects;
