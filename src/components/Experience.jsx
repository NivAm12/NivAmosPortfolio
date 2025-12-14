import Section from './Section';
import { portfolioData } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience" className="bg-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100 flex items-center justify-center gap-3">
                <Briefcase className="text-blue-400" /> Experience
            </h2>

            <div className="space-y-12">
                {portfolioData.experience.map((job, index) => (
                    <div
                        key={index}
                        className="relative border-l-2 border-slate-700 pl-8 ml-4 md:ml-0 hover:border-blue-500 transition-colors duration-300"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500" />

                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div className="flex items-center gap-4">
                                {job.logo && (
                                    <img
                                        src={job.logo}
                                        alt={job.company}
                                        className="w-20 h-20 object-contain rounded-md bg-white p-1"
                                    />
                                )}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-100">{job.title}</h3>
                                    <h4 className="text-lg text-blue-400">{job.company}</h4>
                                </div>
                            </div>
                            <span className="text-slate-400 font-mono text-sm mt-1 md:mt-0 bg-slate-800 px-3 py-1 rounded-full w-fit">
                                {job.period}
                            </span>
                        </div>

                        <ul className="list-disc list-outside text-slate-300 space-y-2 ml-4">
                            {job.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
