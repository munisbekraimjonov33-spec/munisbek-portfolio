import React from 'react';
import { motion } from 'framer-motion';

const techs = [
    "React", "JavaScript", "HTML", "CSS", "Tailwind CSS"
];

const TechMarquee = () => {
    return (
        <div className="relative flex overflow-x-hidden bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-6">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                {[...techs, ...techs, ...techs].map((tech, index) => (
                    <span
                        key={index}
                        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 px-8 uppercase tracking-tighter select-none"
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
