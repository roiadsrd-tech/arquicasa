import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import css from './ImageSpacer.module.css';

import spacerImg from '../assets/portfolio/portfolio_img_4_3.webp';

const ImageSpacer = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <motion.section
            className={css.spacerWrapper}
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.div
                className={css.imageContainer}
                style={{ y }}
            >
                <img src={spacerImg} alt="Architectural Detail" className={css.image} />
            </motion.div>
        </motion.section>
    );
};

export default ImageSpacer;
