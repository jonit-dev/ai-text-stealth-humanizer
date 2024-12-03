import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Text Humanizer</h1>
        </div>
        <p className="text-blue-100">
          Transform AI-generated content into natural, human-like text that bypasses AI detection
        </p>
      </div>
    </header>
  );
}