import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) return null;

    return (
        <article className="pt-32 pb-20 min-h-screen">
            {/* Top Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link to="/projects" className="inline-flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Ortga qaytish
                </Link>
            </div>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">
                            {project.category}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Calendar size={14} /> 2023
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Main Image */}
            <div className="w-full h-[400px] md:h-[600px] bg-slate-100 dark:bg-slate-800 mb-16 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Sidebar (Meta) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                                Texnologiyalar
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center px-3 py-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-600 dark:text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                                Linklar
                            </h3>
                            <div className="flex flex-col gap-3">
                                <a href={project.github} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg group hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                                        <Github size={20} /> Source Code
                                    </span>
                                    <ExternalLink size={16} className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                                </a>
                                <a href={project.link} className="flex items-center justify-between p-3 bg-slate-900 dark:bg-white rounded-lg group hover:opacity-90 transition-opacity">
                                    <span className="flex items-center gap-2 text-white dark:text-slate-900 font-medium">
                                        <ExternalLink size={20} /> Live Preview
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content (Description) */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Loyiha Haqida</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                Bu loyiha zamonaviy frontend texnologiyalari yordamida ishlab chiqilgan. Asosiy maqsad foydalanuvchilar uchun qulay va tezkor interfeys yaratish edi. Loyiha davomida performance optimizatsiyasi, accessibility va zamonaviy UI/UX standartlariga alohida e'tibor qaratildi.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Asosiy Xususiyatlar</h3>
                            <ul className="list-disc pl-4 space-y-2 text-slate-600 dark:text-slate-300">
                                <li>Responsive dizayn (Mobile First).</li>
                                <li>Dark va Light rejimlari.</li>
                                <li>Tezkor yuklanish tezligi.</li>
                                <li>SEO optimizatsiyasi.</li>
                            </ul>

                            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                <p className="text-sm text-slate-500 italic">
                                    "Ushbu loyiha mening murakkab muammolarni hal qilish va toza kod yozish qobiliyatimni namoyish etadi."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectDetails;
