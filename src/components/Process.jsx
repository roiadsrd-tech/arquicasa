import { motion } from 'framer-motion';
import css from './Process.module.css';
import { useLang } from '../context/LanguageContext';

const Process = () => {
    const { t } = useLang();

    return (
        <section id="process" className={css.process}>
            <div className={css.container}>
                <div className={css.header}>
                    <motion.div
                        className={css.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t.process.label}
                    </motion.div>
                    <motion.h2
                        className={css.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t.process.title}
                    </motion.h2>
                </div>

                <div className={css.stepsList}>
                    {t.process.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={css.stepItem}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={css.stepNumber}>0{index + 1} /</div>
                            <div className={css.stepContent}>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
