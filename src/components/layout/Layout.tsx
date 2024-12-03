import React from 'react';
import { PageProps } from '../../types';
import { Navigation } from './Navigation';

export function Layout({ children }: PageProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation />
      {children}
      <footer className="text-center py-6 text-gray-400 border-t border-gray-800">
        <p className="text-sm">For educational purposes only. Use responsibly.</p>
      </footer>
    </div>
  );
}