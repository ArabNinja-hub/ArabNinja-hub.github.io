import React, { useState } from 'react';
import { Database, Server, Cpu, Globe, Layers, ShieldCheck, Compass } from 'lucide-react';

export default function AbstractVisual() {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      id: 'frontend',
      name: 'Client Interface',
      tech: 'React / Vite SPA',
      layer: 'Presentation Layer',
      desc: 'Responsive, accessible user interface managing client state, component hierarchy, and user interactions.',
      icon: Globe,
      role: 'Frontend UI',
      coords: { x: '18%', y: '26%' }
    },
    {
      id: 'gateway',
      name: 'API & Routing',
      tech: 'Express / REST Routes',
      layer: 'Application Gateway',
      desc: 'HTTP endpoint dispatch, middleware validation, and structured request/response pipelines.',
      icon: Server,
      role: 'Service Routing',
      coords: { x: '50%', y: '20%' }
    },
    {
      id: 'logic',
      name: 'Domain Logic Engine',
      tech: 'Modular JavaScript / Node.js',
      layer: 'Core Domain',
      desc: 'Business calculations, balance ledgers, record collation, and administrative permission rules.',
      icon: Cpu,
      role: 'Business Logic',
      coords: { x: '50%', y: '68%' }
    },
    {
      id: 'storage',
      name: 'Persistence Layer',
      tech: 'Relational & Structured Storage',
      layer: 'Data Storage',
      desc: 'Organized entity schemas, SQLite local storage, Firebase authentication, and relational data models.',
      icon: Database,
      role: 'Persistence',
      coords: { x: '82%', y: '50%' }
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-slate-800/90 bg-dark-900/80 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/80">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-dark-950/90 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-400 ml-1 font-semibold">architecture_model.diagram</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-emerald-400 font-mono flex items-center gap-1">
            <Compass className="w-3 h-3" />
            <span>Conceptual Model</span>
          </span>
          <span className="hidden sm:inline px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Full-Stack Architecture
          </span>
        </div>
      </div>

      {/* Main Interactive Topological Canvas */}
      <div className="relative h-72 sm:h-80 w-full p-4 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900">
        {/* Subtle Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
          aria-hidden="true"
        />

        {/* Ambient Radial Accent */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Connecting SVG Data Pathways */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Connection Lines between conceptual layers */}
          <line x1="25%" y1="35%" x2="50%" y2="30%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="50%" y1="35%" x2="50%" y2="65%" stroke="url(#lineGrad)" strokeWidth="1.5" />
          <line x1="50%" y1="70%" x2="78%" y2="55%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="50%" y1="30%" x2="78%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1.5" />

          {/* Conceptual data junctions */}
          <circle cx="37.5%" cy="32.5%" r="3" fill="#10b981" className="opacity-60" />
          <circle cx="50%" cy="50%" r="2.5" fill="#06b6d4" className="opacity-80" />
          <circle cx="64%" cy="40%" r="3" fill="#10b981" className="opacity-80" />
        </svg>

        {/* Layer Representation Cards */}
        <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
          {nodes.map((node, index) => {
            const isSelected = activeNode === index;
            const Icon = node.icon;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNode(index)}
                onMouseEnter={() => setActiveNode(index)}
                className={`min-w-0 text-left p-3 rounded-xl transition-all border ${
                  isSelected
                    ? 'bg-slate-900/95 border-accent-emerald/60 shadow-lg shadow-emerald-950/30'
                    : 'bg-dark-950/70 border-slate-800/80 hover:border-slate-700/90 hover:bg-slate-900/60'
                }`}
                aria-pressed={isSelected}
                aria-label={`Inspect ${node.name} layer details`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className={`p-1.5 rounded-lg ${
                    isSelected ? 'bg-accent-emerald/15 text-accent-emerald' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`hidden sm:inline text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                    isSelected 
                      ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/50' 
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}>
                    {node.role}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {node.name}
                </div>
                <div className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
                  {node.tech}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details HUD */}
      <div className="px-4 py-3 bg-dark-950 border-t border-slate-800/80 text-xs">
        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] mb-1">
          <span className="flex items-center gap-1.5 text-accent-emerald">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Architecture Layer: {nodes[activeNode].name}</span>
          </span>
          <span className="text-slate-400 font-mono">
            {nodes[activeNode].layer}
          </span>
        </div>
        <p className="text-slate-300 text-xs leading-relaxed">
          {nodes[activeNode].desc}
        </p>
      </div>

      {/* Bottom Status Ticker */}
      <div className="px-4 py-2 bg-dark-900/90 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
          <span>Undergraduate Studies & Product Development • Copperbelt University</span>
        </div>
        <span>Kitwe • Zambia</span>
      </div>
    </div>
  );
}
