import React from 'react';

const Dropdown = ({ isOpen, onToggle, name, options }) => {
    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className="text-gray-300 hover:text-purple-400 p-2 border rounded"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {name} {/* Display the name directly */}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    {options.map((option, index) => (
                        <a key={index} href={option.path} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            {option.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
