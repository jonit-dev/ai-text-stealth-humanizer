import React from 'react';
import { StyleOptions } from '../../types';
import { Sliders } from 'lucide-react';

interface StyleOptionsProps {
  options: StyleOptions;
  onChange: (options: StyleOptions) => void;
}

export function StyleOptionsPanel({ options, onChange }: StyleOptionsProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Sliders className="w-5 h-5 text-purple-400" />
        <h2 className="text-lg font-semibold">Style Options</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Writing Tone</label>
          <div className="grid grid-cols-3 gap-2">
            {['casual', 'balanced', 'academic'].map((tone) => (
              <button
                key={tone}
                onClick={() => onChange({ ...options, tone: tone as StyleOptions['tone'] })}
                className={`px-4 py-2 rounded-md text-sm ${
                  options.tone === tone
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tone.charAt(0).toUpperCase() + tone.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Creativity Level: {Math.round(options.creativity * 100)}%
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={options.creativity}
            onChange={(e) => onChange({ ...options, creativity: parseFloat(e.target.value) })}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="preserveKeywords"
            checked={options.preserveKeywords}
            onChange={(e) => onChange({ ...options, preserveKeywords: e.target.checked })}
            className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="preserveKeywords" className="text-sm">
            Preserve technical terms and proper nouns
          </label>
        </div>
      </div>
    </div>
  );
}