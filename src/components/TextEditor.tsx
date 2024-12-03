import React from 'react';
import { Send, Wand2 } from 'lucide-react';
import { humanizeText } from '../utils/textProcessor';

export function TextEditor() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');

  const handleHumanize = () => {
    const humanized = humanizeText(input);
    setOutput(humanized);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <label htmlFor="input" className="block text-sm font-medium text-gray-700">
          Enter AI-generated text
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-48 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Paste your AI-generated text here..."
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleHumanize}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Wand2 className="w-5 h-5" />
          Humanize Text
        </button>
      </div>

      {output && (
        <div className="space-y-2">
          <label htmlFor="output" className="block text-sm font-medium text-gray-700">
            Humanized Output
          </label>
          <div className="relative">
            <textarea
              id="output"
              value={output}
              readOnly
              className="w-full h-48 p-4 border rounded-lg shadow-sm bg-gray-50"
            />
            <button
              onClick={() => navigator.clipboard.writeText(output)}
              className="absolute bottom-4 right-4 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              title="Copy to clipboard"
            >
              <Send className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}