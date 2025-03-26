
import { useState, useEffect } from 'react';
import { Search, ArrowRight, Loader2 } from 'lucide-react';

interface SearchResult {
  term: string;
  count: number;
  surahs: { name: string; count: number }[];
}

// Mock data for demonstration - in a real app, this would come from an API
const searchData: Record<string, SearchResult> = {
  "water": {
    term: "water",
    count: 63,
    surahs: [
      { name: "Al-Baqarah", count: 7 },
      { name: "Al-An'am", count: 5 },
      { name: "Al-A'raf", count: 6 },
      { name: "Ar-Ra'd", count: 4 },
      { name: "Ibrahim", count: 3 }
    ]
  },
  "moon": {
    term: "moon",
    count: 27,
    surahs: [
      { name: "Al-An'am", count: 3 },
      { name: "Yunus", count: 2 },
      { name: "Ar-Rahman", count: 5 },
      { name: "Nuh", count: 2 },
      { name: "Al-Qamar", count: 4 }
    ]
  },
  "sun": {
    term: "sun",
    count: 33,
    surahs: [
      { name: "Al-Baqarah", count: 2 },
      { name: "Yunus", count: 3 },
      { name: "Ar-Rahman", count: 4 },
      { name: "Ash-Shams", count: 6 },
      { name: "Ibrahim", count: 3 }
    ]
  },
  "iron": {
    term: "iron",
    count: 6,
    surahs: [
      { name: "Al-Hadid", count: 2 },
      { name: "Al-Kahf", count: 2 },
      { name: "Saba", count: 1 },
      { name: "Al-Isra", count: 1 }
    ]
  },
  "star": {
    term: "star",
    count: 13,
    surahs: [
      { name: "An-Najm", count: 4 },
      { name: "At-Tariq", count: 3 },
      { name: "Al-Waqiah", count: 2 },
      { name: "At-Takwir", count: 2 },
      { name: "Al-Mursalat", count: 2 }
    ]
  }
};

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Simulated search function
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchTerm.toLowerCase().trim());
  };
  
  // Simulated API call
  useEffect(() => {
    if (!searchQuery) return;
    
    setLoading(true);
    setError('');
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const foundResult = searchData[searchQuery];
      
      if (foundResult) {
        setResult(foundResult);
      } else {
        setResult(null);
        setError(`No results found for "${searchQuery}".`);
      }
      
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);
  
  const getRandomSuggestions = () => {
    const terms = Object.keys(searchData);
    const shuffled = [...terms].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };
  
  const suggestions = getRandomSuggestions();

  return (
    <section id="search" className="py-20 px-4 bg-accent/50 dark:bg-accent/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <span className="px-3 py-1 text-xs md:text-sm text-primary bg-primary/10 dark:bg-primary/20 rounded-full">
            Word Analysis
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Search the <span className="highlight-text">Sacred Words</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover how many times specific words appear in the Quran and their distribution
            across different chapters.
          </p>
        </div>
        
        <div className="glass-card p-8 opacity-0 animate-fade-in delay-200">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter a word (e.g., water, moon, star)"
                className="pl-10 pr-4 py-3 w-full rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={!searchTerm.trim() || loading}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Search <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>
          
          {/* Suggestions */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">Try searching for:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setSearchTerm(term);
                    setSearchQuery(term);
                  }}
                  className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-8 w-8 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">Searching the Quran...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">{error}</p>
              <p className="mt-2 text-sm">Try another term or check your spelling.</p>
            </div>
          ) : result ? (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold">
                  "{result.term}" appears <span className="text-primary">{result.count} times</span> in the Quran
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Distribution chart */}
                <div className="bg-background rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-medium mb-4">Distribution by Surah</h4>
                  <div className="space-y-4">
                    {result.surahs.map((surah) => (
                      <div key={surah.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{surah.name}</span>
                          <span className="text-primary">{surah.count} times</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(surah.count / result.count) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Percentage visualization */}
                <div className="bg-background rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-medium mb-4">Visual Representation</h4>
                  <div className="aspect-square relative rounded-full overflow-hidden border-4 border-muted flex items-center justify-center">
                    <div className="absolute inset-0 flex">
                      {result.surahs.map((surah, index) => {
                        const percentage = (surah.count / result.count) * 100;
                        const hue = (index * 60) % 360;
                        return (
                          <div
                            key={surah.name}
                            className="h-full transition-all duration-1000"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: `hsla(${hue}, 70%, 60%, 0.7)`,
                            }}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="z-10 text-center">
                      <div className="text-3xl font-bold">{result.count}</div>
                      <div className="text-sm text-muted-foreground">occurrences</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {result.surahs.map((surah, index) => {
                      const hue = (index * 60) % 360;
                      return (
                        <div key={surah.name} className="flex items-center text-xs">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: `hsla(${hue}, 70%, 60%, 0.7)` }}
                          ></div>
                          <span>{surah.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : searchQuery ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No search performed yet.</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
