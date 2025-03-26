
import { useEffect, useRef } from 'react';

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0 opacity-30 dark:opacity-20 bg-gradient-radial from-primary/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gold/10 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container px-4 mx-auto z-10 mt-16 md:mt-0">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in">
            <span className="block mb-2">Discover the</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-gold">
              Scientific Miracles
            </span>
            <span className="block mt-2">of the Quran</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in delay-200">
            Explore verses with remarkable scientific accuracy, revealed 1400 years ago,
            only discovered by modern science in recent centuries.
          </p>
          
          <div className="space-x-4 opacity-0 animate-fade-in delay-300">
            <a 
              href="#verses" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
            >
              Explore Verses
            </a>
            <a 
              href="#miracles" 
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-accent border border-border rounded-lg transition-colors"
            >
              View Miracles
            </a>
          </div>
        </div>
        
        {/* Decorative Arabic Script */}
        <div className="mt-16 md:mt-24 text-center opacity-70">
          <p className="text-2xl md:text-3xl font-arabic rtl">
            أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ
          </p>
          <p className="text-sm mt-2 text-muted-foreground italic">
            "Do they not then reflect on the Quran?" [4:82]
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
