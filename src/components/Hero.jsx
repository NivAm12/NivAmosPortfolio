import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const { name, title, socials } = portfolioData.personalInfo;

    return (
        <div className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-slate-900 to-slate-800 text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-6">
                    {name}
                </h1>
                <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
                    {title}
                </h2>

                <div className="flex gap-6 justify-center mb-12">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                            aria-label={social.name}
                        >
                            <social.icon size={32} />
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, bounce: 0.5 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                <ChevronDown className="text-slate-500" size={48} />
            </motion.div>
        </div>
    );
};

export default Hero;
