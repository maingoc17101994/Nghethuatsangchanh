import React, { useState } from 'react';
import { CONCEPTS } from '../constants';
import type { ConceptCategory } from '../types';

interface ConceptSelectorProps {
  selectedConcept: string | null;
  onSelectConcept: (conceptKey: string) => void;
}

interface AccordionItemProps {
  category: ConceptCategory;
  selectedConcept: string | null;
  onSelectConcept: (conceptKey: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ category, selectedConcept, onSelectConcept, isOpen, onToggle }) => {
    return (
        <div className="border-b border-pink-300 last:border-b-0">
            <button onClick={onToggle} className="w-full flex justify-between items-center p-4 text-left font-semibold text-pink-900 hover:bg-pink-100/50 transition-colors">
                <span>{category.label}</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && (
                <div className="p-4 bg-pink-100/30 flex flex-wrap gap-2 animate-fade-in">
                    {category.concepts.map(concept => (
                        <button
                            key={concept.key}
                            onClick={() => onSelectConcept(concept.key)}
                            className={`px-3 py-1.5 text-sm font-bold rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-100 focus:ring-pink-500
                                ${selectedConcept === concept.key 
                                    ? 'bg-pink-500 border-pink-500 text-white shadow-md' 
                                    : 'bg-white border-pink-300 text-pink-800 hover:bg-pink-50 hover:border-pink-400'
                                }`}
                        >
                            {concept.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


const ConceptSelector: React.FC<ConceptSelectorProps> = ({ selectedConcept, onSelectConcept }) => {
    const [openCategory, setOpenCategory] = useState<string | null>(() => {
        const foundCategory = CONCEPTS.find(cat => cat.concepts.some(c => c.key === selectedConcept));
        return foundCategory ? foundCategory.key : CONCEPTS[0]?.key || null;
    });

    const handleToggle = (categoryKey: string) => {
        setOpenCategory(prev => (prev === categoryKey ? null : categoryKey));
    };

    return (
        <div className="bg-pink-200 p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">2. Chọn concept yêu thích</h2>
            <div className="bg-white/50 rounded-lg overflow-hidden border border-pink-300">
                {CONCEPTS.map((category) => (
                    <AccordionItem 
                        key={category.key}
                        category={category}
                        selectedConcept={selectedConcept}
                        onSelectConcept={onSelectConcept}
                        isOpen={openCategory === category.key}
                        onToggle={() => handleToggle(category.key)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConceptSelector;
