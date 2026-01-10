import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Send, MousePointerClick, Code, Layout, Smartphone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechMarquee from '../components/common/TechMarquee';
import MagneticButton from '../components/common/MagneticButton';
import ParticlesBackground from '../components/common/ParticlesBackground';

const services = [
    {
        icon: <Layout className="w-8 h-8 text-primary" />,
        title: "Frontend Development",
        desc: "React va Tailwind yordamida zamonaviy, tezkor va responsive web saytlar."
    },
    {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: "Mobile First Design",
        desc: "Barcha qurilmalarda (telefon, planshet, desktop) ideal ko'rinadigan dizaynlar."
    },
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Clean Code",
        desc: "O'qish oson, kengaytiriluvchi va xalqaro standartlarga mos kod arxitekturasi."
    }
];

const stats = [
    { value: "1+", label: "Yil Tajriba" },
    { value: "3+", label: "Muvaffaqiyatli Loyihalar" },
    { value: "100%", label: "Mijoz Mamnuniyati" },
];

const Home = () => {
    return (
        <>
            <div className="overflow-hidden min-h-screen flex items-center relative">
                <ParticlesBackground />
                <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-20 pb-20 lg:pt-0 lg:pb-0">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="order-2 lg:order-1"
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-3 py-1 mb-6 text-xs md:text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                            >
                                Frontend Developer
                            </motion.span>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[0.9] lg:leading-[0.95]">
                                Munisbek <br />
                                <span className="text-gradient">Raimjonov</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-light">
                                Men foydalanuvchilar sevib ishlatadigan, zamonaviy va mukammal raqamli tajribalarni yarataman.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <MagneticButton>
                                    <Link to="/projects" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                                        <span className="relative z-10 flex items-center">
                                            Loyihalar
                                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </Link>
                                </MagneticButton>

                                <MagneticButton>
                                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 dark:text-slate-200 bg-transparent border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                                        Bog'lanish
                                    </Link>
                                </MagneticButton>
                            </div>

                            <div className="mt-12 flex items-center gap-6">
                                <MagneticButton>
                                    <a href="https://github.com/munisbekraimjonov33-spec" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2">
                                        <Github size={24} />
                                    </a>
                                </MagneticButton>
                                <MagneticButton>
                                    <a href="https://t.me/Munisbek_Raimjonov" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2">
                                        <Send size={24} />
                                    </a>
                                </MagneticButton>
                                <div className="h-px w-20 bg-slate-200 dark:bg-slate-800"></div>
                                <span className="text-sm text-slate-400 font-mono">Samarqand, O'zbekiston</span>
                            </div>
                        </motion.div>

                        {/* Hero Image / Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                        >
                            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 group border-8 border-white dark:border-slate-800">
                                <img
                                    src="/Screenshot 2026-01-04 140542.png"
                                    alt="Munisbek Raimjonov"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                                />

                                {/* Floating badge */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="absolute bottom-8 left-8 glass-card p-4 rounded-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                            <MousePointerClick size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Status</p>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Open to Work</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            <TechMarquee />

            {/* Stats Section */}
            <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 text-center">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-8"
                            >
                                <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Xizmatlar</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Men biznesingizni yangi bosqichga olib chiqish uchun quyidagi xizmatlarni taklif qilaman.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-card p-8 rounded-3xl"
                            >
                                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
