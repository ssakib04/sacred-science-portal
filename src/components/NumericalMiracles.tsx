
import { useState } from 'react';
import { miracles, Miracle } from '../data/miracles';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Info, ChevronRight } from 'lucide-react';

export const NumericalMiracles = () => {
  const [selectedMiracle, setSelectedMiracle] = useState<Miracle | null>(null);
  
  return (
    <section id="miracles" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <span className="px-3 py-1 text-xs md:text-sm text-primary bg-primary/10 dark:bg-primary/20 rounded-full">
            Divine Patterns
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Numerical <span className="highlight-text">Miracles</span> of the Quran
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore the fascinating numerical patterns and perfect balance 
            found within the holy text.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Miracle cards */}
          <div className="col-span-1 space-y-6 overflow-y-auto max-h-[800px] pr-2">
            {miracles.map((miracle, index) => (
              <div
                key={miracle.id}
                className={`glass-card p-6 cursor-pointer transition-all hover:shadow-md opacity-0 animate-fade-in ${
                  selectedMiracle?.id === miracle.id ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
                onClick={() => setSelectedMiracle(miracle)}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                    {miracle.category}
                  </span>
                  <ChevronRight className={`h-5 w-5 text-primary transition-transform ${
                    selectedMiracle?.id === miracle.id ? 'transform rotate-90' : ''
                  }`} />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{miracle.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {miracle.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Miracle details */}
          <div className="col-span-1 lg:col-span-2 glass-card p-6 opacity-0 animate-fade-in delay-200">
            {selectedMiracle ? (
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold">{selectedMiracle.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {selectedMiracle.description}
                  </p>
                </div>
                
                <div className="flex-1 min-h-[300px] mb-6">
                  <h4 className="text-lg font-medium mb-4">Numerical Pattern</h4>
                  
                  {selectedMiracle.numericalDetails.type === 'comparison' && (
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={selectedMiracle.numericalDetails.data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                      >
                        <XAxis 
                          dataKey="label" 
                          angle={-45} 
                          textAnchor="end" 
                          height={60} 
                          tick={{ fill: 'var(--muted-foreground)' }}
                        />
                        <YAxis tick={{ fill: 'var(--muted-foreground)' }} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--card)', 
                            borderColor: 'var(--border)',
                            borderRadius: '0.5rem',
                            color: 'var(--card-foreground)'
                          }} 
                        />
                        <Bar 
                          dataKey="value" 
                          fill="hsl(var(--primary))" 
                          radius={[4, 4, 0, 0]} 
                          animationDuration={1500}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                  
                  {(selectedMiracle.numericalDetails.type === 'correlation' || 
                   selectedMiracle.numericalDetails.type === 'ratio') && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedMiracle.numericalDetails.data.map((item, index) => (
                        <div 
                          key={index} 
                          className="bg-background rounded-lg p-4 border border-border text-center transition-all hover:shadow-md"
                        >
                          <div className="text-3xl font-bold text-primary">{item.value}</div>
                          <div className="text-sm text-muted-foreground mt-2">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="border-t border-border pt-4 flex items-start space-x-3">
                  <Info className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Reference</h4>
                    <p className="text-sm text-muted-foreground mt-1">{selectedMiracle.reference}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <ChevronRight className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">Select a Miracle</h3>
                <p className="text-muted-foreground max-w-md">
                  Click on any of the numerical miracles to see detailed information and visualizations.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
