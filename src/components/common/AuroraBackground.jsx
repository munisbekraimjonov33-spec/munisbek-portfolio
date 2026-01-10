import React from 'react';

const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/30 dark:bg-primary-dark/30 rounded-full blur-[120px] animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-accent/30 dark:bg-accent-dark/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[55%] h-[55%] bg-primary-light/20 dark:bg-primary-dark/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>
    );
};

export default AuroraBackground;
