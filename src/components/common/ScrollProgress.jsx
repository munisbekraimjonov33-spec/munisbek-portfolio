import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-900 via-primary to-slate-900 dark:from-white dark:via-blue-400 dark:to-white z-50 origin-left"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
