import { motion } from 'framer-motion';
import css from './About.module.css';
import { useLang } from '../context/LanguageContext';

const About = () => {
    const { t } = useLang();

    return (
        <section id="about" className={css.about}>
            <div className={css.container}>
                <div className={css.grid}>
                    <motion.div
                        className={css.textBlock}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}
                        >
                            {t.about.headline}
                        </motion.h2>
                        <motion.div
                            className={css.divider}
                            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                            style={{ originX: 0 }}
                        ></motion.div>
                        <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>
                            {t.about.p1}
                        </motion.p>
                        <motion.p className={css.pSecondary} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>
                            {t.about.p2}
                        </motion.p>
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}>
                            <a href="#works" className="btn" style={{ marginTop: '2rem' }}>{t.about.cta}</a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={css.imageBlock}
                        initial={{ clipPath: "inset(100% 0 0 0)" }}
                        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.img
                            src="/tree1.webp"
                            alt="Studio Details"
                            className={css.image}
                            initial={{ scale: 1.2, y: 20 }}
                            whileInView={{ scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
