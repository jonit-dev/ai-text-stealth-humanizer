import React from 'react';
import { TextEditor } from '../components/app/TextEditor';

export function AppPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white">Text Humanizer</h1>
          <p className="mt-2 text-gray-400">Transform your text into natural, human-like writing</p>
        </div>
        <TextEditor />
      </div>
    </div>
  );
}