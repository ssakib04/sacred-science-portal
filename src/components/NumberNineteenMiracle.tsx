
import { useState } from 'react';
import { Info, Check, ChevronRight } from 'lucide-react';

interface NineteenPattern {
  id: number;
  title: string;
  description: string;
  calculation: string;
  result: number;
  multipleOf19: boolean;
  category: string;
}

const nineteenPatterns: NineteenPattern[] = [
  {
    id: 1,
    title: "Basmala Letters",
    description: "The Basmala (Bismillah-ir-Rahman-ir-Raheem) contains exactly 19 Arabic letters.",
    calculation: "Direct count",
    result: 19,
    multipleOf19: true,
    category: "Structure"
  },
  {
    id: 2,
    title: "Quran Chapters",
    description: "The total number of Surahs (chapters) in the Quran is 114, which is 19 × 6.",
    calculation: "114 ÷ 19",
    result: 6,
    multipleOf19: true,
    category: "Structure"
  },
  {
    id: 3,
    title: "Word 'Allah'",
    description: "The word 'Allah' appears 2,698 times in the Quran, which is 19 × 142.",
    calculation: "2,698 ÷ 19",
    result: 142,
    multipleOf19: true,
    category: "Word Count"
  },
  {
    id: 4,
    title: "Word 'Rahman'",
    description: "The word 'Rahman' (Most Gracious) appears 57 times, which is 19 × 3.",
    calculation: "57 ÷ 19",
    result: 3,
    multipleOf19: true,
    category: "Word Count"
  },
  {
    id: 5,
    title: "Word 'Rahim'",
    description: "The word 'Rahim' (Most Merciful) appears 114 times, which is 19 × 6.",
    calculation: "114 ÷ 19",
    result: 6,
    multipleOf19: true,
    category: "Word Count"
  },
  {
    id: 6,
    title: "First Revelation",
    description: "The first revelation (Surah Al-Alaq 96:1-5) consists of 19 words.",
    calculation: "Direct count",
    result: 19,
    multipleOf19: true,
    category: "Structure"
  },
  {
    id: 7,
    title: "Surah 74 (Al-Muddathir)",
    description: "The surah that mentions the number 19 is the 74th surah. 74 = 19 × 3 + 17.",
    calculation: "Verse 30 mentions 'Over it are nineteen'",
    result: 19,
    multipleOf19: true,
    category: "Reference"
  },
  {
    id: 8,
    title: "Chapter and Verse Sum",
    description: "For many surahs, the sum of surah number and its verse count is divisible by 19.",
    calculation: "Example: Surah 19 has 98 verses, 19+98=117",
    result: 117,
    multipleOf19: true,
    category: "Mathematical"
  }
];

export const NumberNineteenMiracle = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(nineteenPatterns.map(pattern => pattern.category)));
  
  const filteredPatterns = activeCategory 
    ? nineteenPatterns.filter(pattern => pattern.category === activeCategory) 
    : nineteenPatterns;
  
  return (
    <section id="number-19" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <span className="px-3 py-1 text-xs md:text-sm text-primary bg-primary/10 dark:bg-primary/20 rounded-full">
            Divine Coding
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            The <span className="highlight-text">Number 19</span> Miracle
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore the fascinating patterns centered around the number 19 in the Quran,
            as mentioned in Surah Al-Muddathir (74:30): "Over it are nineteen."
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeCategory === null 
                ? 'bg-primary text-white' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All Categories
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPatterns.map((pattern, index) => (
            <div
              key={pattern.id}
              className="glass-card p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                  {pattern.category}
                </span>
                {pattern.multipleOf19 && (
                  <div className="flex items-center text-xs text-emerald-500 dark:text-emerald-400">
                    <Check className="h-3 w-3 mr-1" />
                    Multiple of 19
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{pattern.title}</h3>
              <p className="text-muted-foreground mb-4">{pattern.description}</p>
              
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="text-sm font-medium mb-1">Calculation:</div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">{pattern.calculation}</span>
                  <span className="text-primary font-semibold">{pattern.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-accent/50 rounded-full mb-4">
            <Info className="h-6 w-6 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These patterns have been subjects of extensive study and debate among scholars.
            While some view them as evidence of the Quran's divine origin, it's essential to 
            consider these findings within the broader context of faith and individual interpretation.
          </p>
        </div>
      </div>
    </section>
  );
};
