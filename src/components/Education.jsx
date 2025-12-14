import Section from './Section';
import { portfolioData } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <Section id="education" className="bg-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100 flex items-center justify-center gap-3">
                <GraduationCap className="text-blue-400" /> Education
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {portfolioData.education.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-slate-800 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                        <h4 className="text-blue-400 mb-2">{edu.institution}</h4>
                        <div className="text-sm text-slate-400 font-mono mb-4">{edu.period}</div>
                        <p className="text-slate-300 italic mb-2">{edu.details}</p>
                        {edu.thesis && (
                            <div className="mt-4 pt-4 border-t border-slate-700">
                                <p className="text-sm text-slate-300 mb-2"><strong className="text-slate-200">Thesis:</strong> {edu.thesis}</p>
                                {edu.publication && (
                                    <a
                                        href={edu.publication}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-blue-400 hover:text-blue-300 underline"
                                    >
                                        View Publication
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
