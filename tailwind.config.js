/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#6366f1', // Indigo-500
                    DEFAULT: '#4f46e5', // Indigo-600
                    dark: '#3730a3', // Indigo-800
                },
                secondary: {
                    light: '#94a3b8', // Slate-400
                    DEFAULT: '#64748b', // Slate-500
                    dark: '#475569', // Slate-600
                },
                accent: {
                    light: '#34d399', // Emerald-400
                    DEFAULT: '#10b981', // Emerald-500
                    dark: '#059669', // Emerald-600
                },
                background: {
                    light: '#f8fafc', // Soft Slate White (Easy on eyes)
                    dark: '#020617', // Rich Deep Navy/Black
                },
                surface: {
                    light: '#f8fafc',
                    dark: '#0f172a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}