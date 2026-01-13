import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x);
    const mouseY = useSpring(y);

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link to={`/projects/${project.id}`} className="group block perspective-1000">
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="space-y-4"
            >
                {/* Image Container with Depth */}
                <div
                    style={{ transform: "translateZ(30px)" }}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-xl"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />

                    <div className="absolute top-4 right-4 bg-white dark:bg-slate-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                        <ArrowUpRight size={20} className="text-slate-900 dark:text-white" />
                    </div>
                </div>

                {/* Content */}
                <div style={{ transform: "translateZ(20px)" }}>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-1">
                                {project.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                {project.category}
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;