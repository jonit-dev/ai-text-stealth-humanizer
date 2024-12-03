import React from 'react';
import { NavLinkProps } from '../../types';

export function NavLink({ href, children }: NavLinkProps) {
  const isActive = window.location.pathname === href;
  
  return (
    <a
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
}