import Section from './Section';
import { portfolioData } from '../data/portfolio';
import { Cpu } from 'lucide-react';

const Skills = () => {
    return (
        <Section id="skills" className="bg-slate-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100 flex items-center justify-center gap-3">
                <Cpu className="text-blue-400" /> Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
                {portfolioData.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 hover:text-blue-300 transition-colors shadow-sm cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
