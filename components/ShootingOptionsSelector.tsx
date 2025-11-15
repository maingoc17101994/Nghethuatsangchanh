import React, { useState } from 'react';
import { SHOOTING_OPTIONS } from '../constants';
import type { OptionCategory } from '../types';

interface ShootingOptionsSelectorProps {
  selection: { [key: string]: string[] };
  onSelectionChange: (categoryKey: string, optionKey: string) => void;
}

const ShootingOptionsSelector: React.FC<ShootingOptionsSelectorProps> = ({ selection, onSelectionChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const title = "4. Góc chụp & Ánh sáng";

    return (
        <div className="bg-pink-200 p-6 rounded-2xl shadow-md">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-lg font-bold text-zinc-900">
                <span>{title}</span>
                <svg className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && (
                <div className="mt-4 space-y-4 animate-fade-in">
                    {SHOOTING_OPTIONS.map(category => (
                        <div key={category.key}>
                            <h3 className="text-md font-semibold text-pink-800 mb-2">{category.label}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.options.map(option => {
                                    const isSelected = selection[category.key]?.includes(option.key);
                                    return (
                                        <button
                                            key={option.key}
                                            onClick={() => onSelectionChange(category.key, option.key)}
                                            className={`px-3 py-1.5 text-sm font-semibold rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-200 focus:ring-pink-500
                                                ${isSelected
                                                    ? 'bg-pink-500 border-pink-500 text-white'
                                                    : 'bg-white border-pink-300 text-pink-700 hover:bg-pink-100 hover:border-pink-400'
                                                }`}
                                        >
                                            {option.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShootingOptionsSelector;
