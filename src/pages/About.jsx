import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const experiences = [
        {
            year: '2025 - Hozir',
            role: 'Junior Frontend Developer',
            desc: 'Murakkab bolmaydigan web saytlar va 100% ishlaydigan sifatli saytlar yarataman.'
        }
    ];

    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Intro */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight"
                    >
                        Men xaqimda.
                    </motion.h1>
                    <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400">
                        <p>
                            Men Munisbek Raimjonov, O'zbekistonda joylashgan Frontend dasturchiman.
                            Men dizayn va texnologiya kesishmasida ishlashni yaxshi ko'raman va
                            har bir piksel mukammal bo'lishiga intilaman.
                        </p>
                        <p>
                            Mening asosiy e'tiborim - bu tezkor, accessible va intuitiv foydalanuvchi
                            interfeyslarini yaratishdir. Zamonaviy frameworklar (React) va
                            tools (Tailwind) yordamida biznes muammolariga creative yechimlar topaman.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">Skills</h3>
                        <div className="flex flex-wrap gap-x-12 gap-y-4 text-lg font-medium text-slate-700 dark:text-slate-300">
                            <span>JavaScript (ES6+)</span>
                            <span>React</span>
                            <span>HTML / CSS</span>
                            <span>Tailwind CSS</span>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-8"
                            >
                                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-900 dark:bg-white outline outline-4 outline-white dark:outline-slate-950"></div>
                                <span className="text-sm font-mono text-slate-400 mb-1 block">{exp.year}</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                <p className="text-primary font-medium mb-2">{exp.company}</p>
                                <p className="text-slate-500 dark:text-slate-400">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;