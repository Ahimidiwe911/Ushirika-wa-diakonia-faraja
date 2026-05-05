/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Impact } from './components/Impact';
import { Involved } from './components/Involved';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Involved />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

