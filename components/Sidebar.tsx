'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Logo } from './Logo';
import { 
  Info, Zap, MapPin, Hotel, Ship, PlaneLanding, 
  Map, Users, Banknote, ShieldPlus, Camera, Phone 
} from 'lucide-react';

const navItems = [
  { id: 'welcome', title: 'Welcome Note', icon: Info },
  { id: 'quick-facts', title: 'Quick Facts', icon: Zap },
  { id: 'venue', title: 'The Venue', icon: MapPin },
  { id: 'accommodation', title: 'Accommodation', icon: Hotel },
  { id: 'transportation', title: 'Transportation', icon: Ship },
  { id: 'arrival', title: 'Arrival in Maldives', icon: PlaneLanding },
  { id: 'getting-around', title: 'Getting Around', icon: Map },
  { id: 'etiquette', title: 'Etiquette', icon: Users },
  { id: 'currency', title: 'Currency & Payments', icon: Banknote },
  { id: 'health-safety', title: 'Health & Safety', icon: ShieldPlus },
  { id: 'experience', title: 'Experience Malé', icon: Camera },
  { id: 'contacts', title: 'Useful Contacts', icon: Phone },
];

export function Sidebar({ className = '' }: { className?: string }) {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 32;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className={`bg-white border-r border-slate-200 flex flex-col h-full ${className}`}>
      <div className="relative p-6 border-b border-slate-100 flex items-center gap-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=400"
            alt="Maldives"
            fill
            className="object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
        <Logo className="w-10 h-10 shrink-0" />
        <div>
          <h1 className="font-bold text-slate-900 leading-tight">ISSA Seminar</h1>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Participant Guide</p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-teal-50 text-teal-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
              {item.title}
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 rounded-xl p-4 text-xs text-slate-500">
          <p className="font-medium text-slate-700 mb-1">6–7 May 2026</p>
          <p>Crossroads Maldives</p>
        </div>
      </div>
    </aside>
  );
}
