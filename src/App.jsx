import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import FullMenu from './components/FullMenu';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute('lang', 'en');
  }, []);

  return (
    <div className="bg-[#1A1A1A]">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Menu />
        <FullMenu />
        <Location />
      </main>
      <Footer />
    </div>
  );
}