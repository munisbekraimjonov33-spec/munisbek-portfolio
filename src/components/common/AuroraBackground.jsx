import React from 'react';

const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-blue-400/30 dark:bg-blue-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-indigo-400/30 dark:bg-indigo-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-blob animation-delay-4000" />
            <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2] pointer-events-none mix-blend-overlay" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
            }}></div>
        </div>
    );
};

export default AuroraBackground;
