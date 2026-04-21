import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
