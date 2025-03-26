
import { useState } from 'react';
import { verses, Verse } from '../data/verses';
import { ChevronDown, BookOpen } from 'lucide-react';

export const VerseCollection = () => {
  const [expandedVerseId, setExpandedVerseId] = useState<number | null>(null);
  const [translationMode, setTranslationMode] = useState<'simple' | 'detailed'>('simple');
  
  const toggleExpand = (id: number) => {
    setExpandedVerseId(expandedVerseId === id ? null : id);
  };

  return (
    <section id="verses" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <span className="px-3 py-1 text-xs md:text-sm text-primary bg-primary/10 dark:bg-primary/20 rounded-full">
            Scientific Insights
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Quranic Verses with <span className="highlight-text">Scientific Significance</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover verses from the Quran that contain remarkable scientific facts,
            revealed long before modern scientific discoveries.
          </p>
          
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => setTranslationMode('simple')}
              className={`px-4 py-2 rounded-lg text-sm ${
                translationMode === 'simple'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground'
              } transition-colors`}
            >
              Simple Translation
            </button>
            <button
              onClick={() => setTranslationMode('detailed')}
              className={`px-4 py-2 rounded-lg text-sm ${
                translationMode === 'detailed'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground'
              } transition-colors`}
            >
              Detailed Explanation
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {verses.map((verse, index) => (
            <div
              key={verse.id}
              className={`glass-card p-6 transition-all duration-300 transform opacity-0 animate-fade-in`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                    {verse.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">
                    Surah {verse.surah} ({verse.ayah})
                  </h3>
                </div>
                <button
                  onClick={() => toggleExpand(verse.id)}
                  className={`p-2 rounded-full transition-all ${
                    expandedVerseId === verse.id ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      expandedVerseId === verse.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              
              <div dir="rtl" lang="ar" className="text-right mb-4 font-arabic text-xl leading-relaxed">
                {verse.arabicText}
              </div>
              
              <div className="mb-4 text-muted-foreground">
                {translationMode === 'simple' ? verse.translation : verse.explanation}
              </div>
              
              {expandedVerseId === verse.id && (
                <div className="mt-6 pt-4 border-t border-border animate-fade-in">
                  <h4 className="flex items-center text-sm font-semibold mb-2">
                    <BookOpen className="h-4 w-4 mr-2 text-primary" />
                    Scientific Reference
                  </h4>
                  <p className="text-sm text-muted-foreground">{verse.reference}</p>
                  
                  {translationMode === 'simple' ? (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Scientific Explanation</h4>
                      <p className="text-sm text-muted-foreground">{verse.explanation}</p>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
