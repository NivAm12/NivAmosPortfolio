import Section from './Section';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    const { email, phone, socials } = portfolioData.personalInfo;

    return (
        <Section id="contact" className="bg-slate-800 text-center pb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100">Get In Touch</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                Whether you have a question or just want to say hi, feel free to drop me a message!
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
                <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                    <Mail size={24} />
                    Send Email
                </a>
                <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-700 text-slate-200 rounded-full hover:bg-slate-600 transition-colors text-lg font-medium"
                >
                    <Phone size={24} />
                    {phone}
                </a>
            </div>

            <div className="border-t border-slate-700 pt-8 mt-12">
                <div className="flex justify-center gap-6 mb-8">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                </p>
            </div>
        </Section>
    );
};

export default Contact;
