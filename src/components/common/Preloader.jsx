import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 soniya ko'rsatiladi
        return () => clearTimeout(timer);
    }, [setLoading]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative flex flex-col items-center gap-8">
                {/* Site Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-2xl"
                >
                    <img
                        src="/image_1_1767593809238.jpg"
                        alt="Munisbek Portfolio"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Spinner */}
                <motion.div
                    className="w-12 h-12 border-4 border-slate-200 dark:border-slate-800 border-t-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-xl font-bold text-slate-900 dark:text-white tracking-widest uppercase"
            >
                Munisbek.dev
            </motion.h2>
        </motion.div>
    );
};

export default Preloader;