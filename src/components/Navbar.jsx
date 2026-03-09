import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import css from './Navbar.module.css';
import { useLang } from '../context/LanguageContext';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [isDarkText, setIsDarkText] = useState(false);
    const { lang, t, toggleLang } = useLang();

    useMotionValueEvent(scrollY, "change", () => {
        const mainChildren = document.querySelectorAll('main > *');
        const footer = document.querySelector('footer');

        const checkRect = (rect) => rect.top <= 50 && rect.bottom >= 50;

        let shouldBeDark = false;

        mainChildren.forEach((child, index) => {
            const rect = child.getBoundingClientRect();
            if (checkRect(rect)) {
                if (index === 0) shouldBeDark = false; // Hero
                else if (index === 1) shouldBeDark = true; // About
                else if (index === 2) shouldBeDark = false; // Logos
                else if (index === 3) shouldBeDark = false; // ImageSpacer
                else if (index === 4) shouldBeDark = true; // Story
                else if (index === 5) {
                    // Works section - dark background
                    shouldBeDark = false;
                }
                else if (index === 6) shouldBeDark = true; // Process
            }
        });

        if (footer) {
            const rect = footer.getBoundingClientRect();
            if (checkRect(rect)) {
                shouldBeDark = false; // Footer
            }
        }

        setIsDarkText(shouldBeDark);
    });

    return (
        <>
            <motion.header
                className={`${css.navbar} ${isDarkText ? css.textDark : css.textLight}`}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className={css.navContainer}>
                    <a
                        href="/"
                        className={css.logo}
                        style={{
                            color: isDarkText ? '#000' : '#fff',
                            textShadow: 'none',
                            filter: 'none',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        ARQUICASA.
                    </a>
                    <div className={css.actions}>
                        {/* Language toggle */}
                        <button
                            onClick={toggleLang}
                            className={`${css.langToggle} ${isDarkText ? css.langToggleDark : css.langToggleLight}`}
                            aria-label="Toggle language"
                            title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span>{lang === 'en' ? 'ES' : 'EN'}</span>
                        </button>

                        <a
                            href="#contact"
                            className={`${css.btnPill} ${isDarkText ? css.btnDark : css.btnWhite}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById('contact');
                                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        >
                            <span className={css.dot} style={{ borderColor: isDarkText ? '#fff' : '#000', transition: 'border-color 0.3s ease' }}></span>
                            {t.nav.contact}
                        </a>
                    </div>
                </div>
            </motion.header>
        </>
    );
};

export default Navbar;
