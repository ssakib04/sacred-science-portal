
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { VerseCollection } from '../components/VerseCollection';
import { SearchSection } from '../components/SearchSection';
import { NumericalMiracles } from '../components/NumericalMiracles';
import { NumberNineteenMiracle } from '../components/NumberNineteenMiracle';
import { ThemeProvider } from '../context/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="bg-texture">
          <Hero />
          <VerseCollection />
          <SearchSection />
          <NumericalMiracles />
          <NumberNineteenMiracle />
          
          <footer className="py-8 px-4 border-t border-border">
            <div className="container mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Quranic Miracles | A journey through faith and science
              </p>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
