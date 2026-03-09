import { motion } from 'framer-motion';
import css from './Story.module.css';
import { useLang } from '../context/LanguageContext';

import storyImg from '../assets/pa1.webp';

const Story = () => {
    const { t } = useLang();

    return (
        <section className={css.story}>
            <div className={css.container}>
                <motion.div
                    className={css.imageBlock}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.img
                        src={storyImg}
                        alt="Architecture History"
                        className={css.image}
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                </motion.div>

                <motion.div
                    className={css.textBlock}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                    }}
                >
                    <motion.div className={css.label} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}>{t.story.label}</motion.div>
                    <motion.h2 className={css.title} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>{t.story.title}</motion.h2>
                    <motion.p className={css.description} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>
                        {t.story.p1}
                    </motion.p>
                    <motion.p className={`${css.description} ${css.descriptionSecondary}`} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>
                        {t.story.p2}
                    </motion.p>

                    <motion.div
                        className={css.factsGrid}
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
                    >
                        <motion.div className={css.factItem} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
                            <div className={css.factValue}>16+</div>
                            <div className={css.factLabel}>{t.story.yearsLabel}</div>
                        </motion.div>
                        <motion.div className={css.factItem} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
                            <div className={css.factValue}>100+</div>
                            <div className={css.factLabel}>{t.story.projectsLabel}</div>
                        </motion.div>
                        <motion.div className={css.factItem} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
                            <div className={css.factValue}>6+</div>
                            <div className={css.factLabel}>{t.story.awardsLabel}</div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
