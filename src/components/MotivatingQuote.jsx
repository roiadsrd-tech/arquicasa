import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import css from './MotivatingQuote.module.css';

const MotivatingQuote = ({ highlightText, mutedText }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 20%"]
    });

    return (
        <div className={css.quoteSection} ref={ref}>
            {/* Background decorative lines like the screenshot */}
            <div className={css.linesBackground}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={css.verticalLine} />
                ))}
            </div>

            <div className={css.quoteContainer}>
                <motion.p
                    className={css.quoteText}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={css.highlight}><span className={css.dot}>●</span> {highlightText}</span>
                    <span className={css.muted}>{mutedText}</span>
                </motion.p>
            </div>
        </div>
    );
};

export default MotivatingQuote;
