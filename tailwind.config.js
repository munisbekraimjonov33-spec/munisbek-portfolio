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
                    light: '#4f46e5', // Indigo-600
                    DEFAULT: '#4338ca', // Indigo-700
                    dark: '#3730a3', // Indigo-800
                },
                secondary: {
                    light: '#64748b', // Slate-500
                    DEFAULT: '#475569', // Slate-600
                    dark: '#334155', // Slate-700
                },
                background: {
                    light: '#f8fafc', // Slate-50
                    dark: '#0f172a', // Slate-900
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
