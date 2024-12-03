import React from 'react';
import { MessageSquare, Shield, Zap, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Bypass Detection',
    description: 'Avoid AI detection while maintaining your original message',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Natural Style',
    description: 'Transform formal AI text into casual, student-like writing',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Quick Results',
    description: 'Get your humanized text instantly, perfect for tight deadlines',
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Keep Context',
    description: 'Preserve your ideas while making the text sound more natural',
  },
];

export function Features() {
  return (
    <div className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-900/50 rounded-lg text-purple-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                  <p className="text-gray-400 mt-1">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}