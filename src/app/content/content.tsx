"use client"
import React from 'react';

export default function AgenticAICore() {
  const agents = [
    { name: 'RESEARCH\nAGENT', icon: '🔍', angle: 0 },
    { name: 'AGENTIC AI\nAGENT', icon: '🤖', angle: 60 },
    { name: 'AUTOMATION\nAGENT', icon: '⚙️', angle: 120 },
    { name: 'SECURITY\nAGENT', icon: '🛡️', angle: 180 },
    { name: 'COMMUNICATION\nAGENT', icon: '💬', angle: 240 },
    { name: 'DELETE\nAGENT', icon: '📁', angle: 300 }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative" style={{ width: '600px', height: '600px' }}>
          
          {/* Rotating connection lines */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
                  <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
                  <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
                </linearGradient>
              </defs>
              {agents.map((agent, i) => {
                const nextAgent = agents[(i + 1) % agents.length];
                const angle1 = (agent.angle * Math.PI) / 180;
                const angle2 = (nextAgent.angle * Math.PI) / 180;
                const radius = 200;
                const x1 = 300 + radius * Math.cos(angle1);
                const y1 = 300 + radius * Math.sin(angle1);
                const x2 = 300 + radius * Math.cos(angle2);
                const y2 = 300 + radius * Math.sin(angle2);
                
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                );
              })}
              
              {/* Lines to center */}
              {agents.map((agent, i) => {
                const angle = (agent.angle * Math.PI) / 180;
                const radius = 200;
                const x = 300 + radius * Math.cos(angle);
                const y = 300 + radius * Math.sin(angle);
                
                return (
                  <line
                    key={`center-${i}`}
                    x1={300}
                    y1={300}
                    x2={x}
                    y2={y}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                );
              })}
            </svg>
          </div>

          {/* Central core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 animate-pulse blur-xl" style={{ width: '180px', height: '180px', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-30 animate-ping" style={{ width: '160px', height: '160px', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}></div>
              
              {/* Main circle */}
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500 shadow-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
                
                {/* Brain icon representation */}
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-2 animate-pulse">🧠</div>
                  <div className="text-cyan-400 font-bold text-xs tracking-wider">AGENTIC AI</div>
                  <div className="text-cyan-300 font-semibold text-[10px]">CORE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rotating agents */}
          <div className="absolute inset-0 animate-spin-slow">
            {agents.map((agent, index) => {
              const angle = (agent.angle * Math.PI) / 180;
              const radius = 200;
              const x = 300 + radius * Math.cos(angle) - 60;
              const y = 300 + radius * Math.sin(angle) - 60;

              return (
                <div
                  key={index}
                  className="absolute w-28 h-28"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                >
                  <div className="relative w-full h-full animate-reverse-spin-slow">
                    {/* Outer glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-lg"></div>
                    
                    {/* Agent circle */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/50 shadow-xl flex flex-col items-center justify-center backdrop-blur-sm hover:border-cyan-400 hover:scale-110 transition-all duration-300">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                      
                      <div className="relative z-10 text-3xl mb-1">{agent.icon}</div>
                      <div className="relative z-10 text-cyan-400 font-semibold text-[9px] text-center leading-tight whitespace-pre-line px-2">
                        {agent.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal window with slide down animation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-8 w-96 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden animate-slide-down">
            <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-cyan-500/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-cyan-400 text-xs font-mono ml-2">System Output</span>
            </div>
            <div className="p-4 font-mono text-[10px] text-green-400 h-48 overflow-hidden relative">
              <div className="animate-scroll-up">
                <div className="mb-1"><span className="text-cyan-400">[INFO]</span> Initializing Agentic AI Core...</div>
                <div className="mb-1"><span className="text-cyan-400">[INFO]</span> Loading agent modules...</div>
                <div className="mb-1"><span className="text-green-400">[SUCCESS]</span> Research Agent: Active</div>
                <div className="mb-1"><span className="text-green-400">[SUCCESS]</span> Automation Agent: Active</div>
                <div className="mb-1"><span className="text-green-400">[SUCCESS]</span> Security Agent: Active</div>
                <div className="mb-1"><span className="text-green-400">[SUCCESS]</span> Communication Agent: Active</div>
                <div className="mb-1"><span className="text-cyan-400">[INFO]</span> All systems operational</div>
                <div className="mb-1"><span className="text-yellow-400">[PROCESS]</span> Monitoring agent network...</div>
                <div className="mb-1"><span className="text-cyan-400">[INFO]</span> Data sync in progress...</div>
                <div className="mb-1"><span className="text-green-400">[SUCCESS]</span> Task execution complete</div>
                <div className="mb-1"><span className="text-cyan-400">[INFO]</span> Optimizing performance...</div>
                <div className="mb-1"><span className="text-green-400">[SUCCESS]</span> All agents synchronized</div>
                <div className="mb-1"><span className="text-cyan-400">[INFO]</span> System health: Optimal</div>
                <div className="mb-1"><span className="text-yellow-400">[PROCESS]</span> Running diagnostics...</div>
                <div className="mb-1"><span className="text-green-400">[SUCCESS]</span> Diagnostics passed</div>
                <div className="animate-pulse">▊</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes reverse-spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-reverse-spin-slow {
          animation: reverse-spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}