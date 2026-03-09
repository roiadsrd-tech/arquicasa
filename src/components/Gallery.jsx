import { motion } from 'framer-motion';
import css from './Gallery.module.css';

import img1 from '../assets/portfolio/portfolio_img_8_1.webp';
import img2 from '../assets/portfolio/portfolio_img_10_1.webp';
import img3 from '../assets/portfolio/portfolio_img_13_1.webp';
import img4 from '../assets/portfolio/portfolio_img_14_1.webp';

const images = [img1, img2, img3, img4];

const Gallery = () => {
    return (
        <section className={css.gallerySection}>
            <div className={css.container}>
                <div className={css.header}>
                    <div className={css.label}>● COLLECTION</div>
                    <h2 className={css.title}>TIMELESS CAPTURES</h2>
                </div>
            </div>

            <div className={css.carouselContainer}>
                <div className={css.carousel}>
                    {images.map((img, index) => (
                        <div key={index} className={css.slide}>
                            <img src={img} alt={`Gallery Image ${index + 1}`} className={css.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
