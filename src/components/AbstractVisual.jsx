import React, { useState } from 'react';
import { Globe2, Server, Cpu, Database } from 'lucide-react';

const nodes = [
  { name: 'Client interface', detail: 'Responsive interfaces for people using the application.', label: 'Presentation', icon: Globe2 },
  { name: 'API & routing', detail: 'Routes and endpoints connect the interface to application services.', label: 'Application', icon: Server },
  { name: 'Domain logic', detail: 'Application rules and calculations handle the work behind each interaction.', label: 'Logic', icon: Cpu },
  { name: 'Data storage', detail: 'Structured storage keeps application records organised and accessible.', label: 'Persistence', icon: Database },
];

export default function AbstractVisual() {
  const [activeNode, setActiveNode] = useState(0);
  return <div className="architecture">
    <div className="architecture-header"><span><span className="architecture-dot" /> architecture / conceptual model</span><span className="architecture-index">01—04</span></div>
    <div className="architecture-grid">{nodes.map(({ name, label, icon: Icon }, index) => <button key={name} type="button" className={`architecture-node ${activeNode === index ? 'is-active' : ''}`} onClick={() => setActiveNode(index)} aria-pressed={activeNode === index} aria-label={`Inspect ${name === 'API & routing' ? 'API & Routing' : name} layer details`}><Icon size={17} aria-hidden="true" /><span><strong>{name}</strong><small>{label}</small></span></button>)}</div>
    <div className="architecture-detail" aria-live="polite"><span>SELECTED LAYER / {nodes[activeNode].name}</span><p>{nodes[activeNode].detail}</p></div>
  </div>;
}
