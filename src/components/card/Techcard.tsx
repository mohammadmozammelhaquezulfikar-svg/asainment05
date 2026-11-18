import React from 'react';


const Techcard = ({ tech }) => {
    return (
       <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{tech.name}</h3>
                <span className="text-xs bg-sky-100 text-sky-600 px-2 py-1 rounded-full">
                    {tech.badge}
                </span>
            </div>

            <p className="mt-2 text-sm text-gray-600">{tech.description}</p>

            <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
                <span className="bg-gray-100 px-2 py-1 rounded">{tech.level}</span>
                <span>⭐ {tech.rating}</span>
            </div>

            <button className="mt-4 w-full bg-slate-900 text-white text-sm py-2 rounded-lg hover:bg-slate-700">
                Add to Stack
            </button>
        </div>
    );
};

export default Techcard;