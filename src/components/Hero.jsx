import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import css from './Hero.module.css';
import { useLang } from '../context/LanguageContext';

import heroImg from '../assets/portfolio/portfolio_img_4_1.webp';

const Hero = () => {
    const ref = useRef(null);
    const { t } = useLang();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section className={css.hero} ref={ref}>
            <motion.div
                className={css.imageWrapper}
                style={{ y, opacity }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <img src={heroImg} alt="Modern Architecture" className={css.image} />
                <div className={css.overlay}></div>
            </motion.div>

            <div className={css.content}>
                <div className={css.container}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                            }
                        }}
                    >
                        <h1 style={{ margin: 0 }}>
                            <motion.span style={{ display: 'block' }} variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>{t.hero.line1}</motion.span>
                            <motion.span style={{ display: 'block' }} variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>{t.hero.line2}</motion.span>
                            <motion.span style={{ display: 'block' }} variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>{t.hero.line3}</motion.span>
                        </h1>
                    </motion.div>
                    <motion.div
                        className={css.meta}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p>{t.hero.studio}</p>
                        <p>Est. 2010</p>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className={css.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span>{t.hero.scroll}</span>
                <div className={css.line}></div>
            </motion.div>
        </section>
    );
};

export default Hero;
