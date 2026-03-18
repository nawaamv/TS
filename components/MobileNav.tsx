'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Sidebar } from './Sidebar';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8 shrink-0" />
          <span className="font-bold text-slate-900">ISSA Seminar</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-xl">
            <Sidebar className="w-full" />
          </div>
        </div>
      )}
    </>
  );
}
