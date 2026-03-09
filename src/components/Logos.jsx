import { motion } from 'framer-motion';
import css from './Logos.module.css';

const logos = [
    '/ame.avif',
    '/brav.avif',
    '/hum.avif',
    '/icc.avif',
    '/roll.avif',
];

const Logos = () => {
    // Duplicate logos for seamless infinite loop
    const displayLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className={css.logosSection}>
            <div className={css.container}>
                <div className={css.label}>● TRUSTED BY</div>
                <div className={css.marqueeWrapper}>
                    <motion.div
                        className={css.marquee}
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {displayLogos.map((logo, index) => (
                            <img key={index} src={logo} alt="Partner Logo" className={css.logoImg} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Logos;
