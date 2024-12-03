import React from 'react';
import { TextStats } from '../../types';
import { Clock, BookOpen, Brain, Gauge } from 'lucide-react';

interface TextStatsProps {
  stats: TextStats;
}

export function TextStatsDisplay({ stats }: TextStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-purple-400 mb-2">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm">Word Count</span>
        </div>
        <p className="text-2xl font-bold">{stats.wordCount}</p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-purple-400 mb-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Reading Time</span>
        </div>
        <p className="text-2xl font-bold">{stats.readingTime} min</p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-purple-400 mb-2">
          <Brain className="w-4 h-4" />
          <span className="text-sm">Complexity</span>
        </div>
        <p className="text-2xl font-bold">{stats.complexity}%</p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-purple-400 mb-2">
          <Gauge className="w-4 h-4" />
          <span className="text-sm">Formality</span>
        </div>
        <p className="text-2xl font-bold">{stats.formalityScore}%</p>
      </div>
    </div>
  );
}