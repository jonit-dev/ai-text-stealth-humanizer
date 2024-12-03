import React from 'react';
import { Send, Wand2 } from 'lucide-react';
import { humanizeText } from '../../utils/textProcessor';
import { calculateTextStats } from '../../utils/textAnalyzer';
import { StyleOptionsPanel } from './StyleOptions';
import { TextStatsDisplay } from './TextStats';
import { StyleOptions, TextStats } from '../../types';

export function TextEditor() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [stats, setStats] = React.useState<TextStats | null>(null);
  const [styleOptions, setStyleOptions] = React.useState<StyleOptions>({
    tone: 'balanced',
    creativity: 0.5,
    preserveKeywords: true,
  });

  const handleHumanize = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const humanized = humanizeText(input, styleOptions);
      setOutput(humanized);
      setStats(calculateTextStats(humanized));
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <StyleOptionsPanel options={styleOptions} onChange={setStyleOptions} />
      
      <div className="space-y-2">
        <label htmlFor="input" className="block text-sm font-medium text-gray-300">
          Paste your AI-generated text
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-48 p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-gray-100 
                   focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500"
          placeholder="Paste your text here..."
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleHumanize}
          disabled={isProcessing || !input}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors
                    ${isProcessing || !input 
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700'}`}
        >
          <Wand2 className="w-5 h-5" />
          {isProcessing ? 'Processing...' : 'Humanize Text'}
        </button>
      </div>

      {output && (
        <>
          {stats && <TextStatsDisplay stats={stats} />}
          
          <div className="space-y-2">
            <label htmlFor="output" className="block text-sm font-medium text-gray-300">
              Your Humanized Text
            </label>
            <div className="relative">
              <textarea
                id="output"
                value={output}
                readOnly
                className="w-full h-48 p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-gray-100"
              />
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="absolute bottom-4 right-4 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-gray-300"
                title="Copy to clipboard"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}