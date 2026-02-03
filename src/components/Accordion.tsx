import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
    title: string;
    image: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

export function Accordion({ title, image, isOpen, onToggle, children }: AccordionProps) {
    return (
        <div className={`group/accordion mb-8 rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isOpen ? 'ring-2 ring-gold/50 shadow-2xl scale-[1.02]' : 'hover:shadow-2xl hover:-translate-y-1'}`}>
            <button
                onClick={onToggle}
                className="w-full relative h-[400px] md:h-[500px] cursor-pointer focus:outline-none overflow-hidden"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${title}`}
            >
                {/* Image Background with Parallax-like scale */}
                <div className="absolute inset-0 bg-black/30 group-hover/accordion:bg-black/20 transition-colors duration-700 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 z-10" />

                <img
                    src={image}
                    alt={title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${isOpen ? 'scale-110 blur-sm' : 'group-hover/accordion:scale-105'}`}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                    <span className={`text-gold font-serif tracking-[0.5em] uppercase text-sm mb-4 transition-all duration-700 delay-100 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover/accordion:opacity-100 group-hover/accordion:translate-y-0'}`}>
                        Destination
                    </span>
                    <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 drop-shadow-2xl transform transition-transform duration-700 group-hover/accordion:scale-105">
                        {title}
                    </h2>

                    <div className={`w-16 h-16 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gold rotate-180 border-gold' : 'bg-white/10 group-hover/accordion:bg-white/20'}`}>
                        <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${isOpen ? 'text-royal' : 'text-white'}`} />
                    </div>
                </div>
            </button>

            <div
                id={`accordion-content-${title}`}
                className={`bg-sand grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                role="region"
            >
                <div className="overflow-hidden">
                    <div className="p-6 md:p-12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
