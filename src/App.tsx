import React from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Portfolio } from './components/portfolio';
import { Testimonials } from './components/testimonials';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;