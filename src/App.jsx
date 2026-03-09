import { useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';

import ImageSpacer from './components/ImageSpacer';
import Story from './components/Story';
import Process from './components/Process';
import Logos from './components/Logos';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 2,
            wheelMultiplier: 0.8,
            lerp: 0.05,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <LanguageProvider>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Logos />
                <ImageSpacer />
                <Story />
                <Works />
                <Process />
            </main>
            <Footer />
        </LanguageProvider>
    );
}

export default App;
