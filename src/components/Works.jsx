import { motion } from 'framer-motion';
import css from './Works.module.css';
import { useLang } from '../context/LanguageContext';

// Import exact portfolio images
import imgSchool from '../assets/portfolio/portfolio_img_4_1.webp';
import imgAuditorium from '../assets/portfolio/portfolio_img_6_1.webp';
import imgCafeteria from '../assets/portfolio/portfolio_img_8_1.webp';
import imgMultipurpose from '../assets/portfolio/portfolio_img_10_1.webp';
import imgRestaurant from '../assets/portfolio/portfolio_img_11_3.webp';
import imgChurchVerdad from '../assets/portfolio/portfolio_img_13_1.webp';
import imgWarehouse from '../assets/portfolio/portfolio_img_14_2.webp';
import imgClinic from '../assets/portfolio/portfolio_img_15_1.webp';
import imgChurchFund from '../assets/portfolio/portfolio_img_16_1.webp';
import imgApartment from '../assets/portfolio/portfolio_img_17_2.webp';
import imgHouse from '../assets/portfolio/portfolio_img_18_1.webp';
import imgGym from '../assets/portfolio/portfolio_img_19_1.webp';

const projects = [
    { id: 1, title: 'Comunidad de Esperanza', img: imgSchool, descEn: 'Educational campus focusing on collaborative learning areas and modern amenities.', descEs: 'Campus educativo enfocado en áreas de aprendizaje colaborativo y comodidades modernas.' },
    { id: 2, title: 'Baptist Church Auditorium', img: imgAuditorium, descEn: 'A large-scale spiritual gathering hall with optimized acoustics and natural lighting.', descEs: 'Gran salón espiritual con acústica optimizada e iluminación natural.' },
    { id: 3, title: 'San Judas Tadeo Cafeteria', img: imgCafeteria, descEn: 'Vibrant indoor dining space blending organic textures with an open floor plan.', descEs: 'Vibrante espacio de comedor que combina texturas orgánicas con planta abierta.' },
    { id: 4, title: 'Convertidos a Cristo Hall', img: '/icc2.webp', descEn: 'Multipurpose assembly hall designed to accommodate varied congregational events.', descEs: 'Salón multipropósito diseñado para eventos congregacionales variados.' },
    { id: 5, title: 'Rolling Steaks & Hummus', img: imgRestaurant, descEn: 'Boutique restauranteur interior merging warmth and modern industrial charm.', descEs: 'Interior de restaurante boutique que combina calidez y encanto industrial moderno.' },
    { id: 6, title: 'La Verdad Church', img: imgChurchVerdad, descEn: 'Sleek, minimalist architectural approach establishing a reverent atmosphere.', descEs: 'Enfoque arquitectónico minimalista que establece una atmósfera reverente.' },
    { id: 7, title: 'Automotive Warehouse', img: imgWarehouse, descEn: 'Functional commercial structure prioritizing logistical efficiency and robust durability.', descEs: 'Estructura comercial funcional que prioriza la eficiencia logística y la durabilidad.' },
    { id: 8, title: 'Plaza Bernabé Clinic', img: imgClinic, descEn: 'Modern healthcare facility emphasizing patient comfort and clear wayfinding.', descEs: 'Instalación médica moderna que prioriza la comodidad del paciente y orientación clara.' },
    { id: 9, title: 'Fundamental Baptist Church', img: imgChurchFund, descEn: 'Traditional aesthetic elements combined with contemporary spatial planning.', descEs: 'Elementos estéticos tradicionales combinados con planificación espacial contemporánea.' },
    { id: 10, title: 'MEDOS MAILOL Tower', img: imgApartment, descEn: 'High-rise residential project incorporating extensive balconies and premium finishes.', descEs: 'Torre residencial con amplios balcones y acabados de primera calidad.' },
    { id: 11, title: 'NC Residence', img: imgHouse, descEn: 'Private single-family home centered around maximizing indoor-outdoor living.', descEs: 'Residencia privada diseñada para maximizar la vida interior-exterior.' },
    { id: 12, title: "Gold's Gym", img: imgGym, descEn: 'Expansive multi-level fitness complex equipped with distinct workout zones.', descEs: 'Complejo de fitness multinivel con zonas de entrenamiento diferenciadas.' }
];


const Works = () => {
    const { lang, t } = useLang();

    return (
        <div id="works" className={css.worksWrapper}>

            {/* Intro Section */}
            <div className={css.introSection}>
                <div className={css.introContainer}>
                    <motion.div
                        className={css.introLabel}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {t.works.label}
                    </motion.div>
                    <div className={css.introTextWrapper}>
                        <motion.h2
                            className={css.introHeadline}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {t.works.headline1}<br />{t.works.headline2}
                        </motion.h2>
                    </div>
                </div>
            </div>

            <div className={css.gridContainer}>
                {/* Projects grid */}
                <div className={css.projectsGrid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={css.projectCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
                        >
                            <div className={css.imageWrapper}>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className={css.image}
                                />
                            </div>
                            <h3 className={css.projectTitle}>{project.title}</h3>
                            <p className={css.projectDesc}>
                                {lang === 'en' ? project.descEn : project.descEs}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className={css.downloadWrapper}>
                    <motion.a
                        href="/Architecture Portfolio.pdf"
                        download
                        className={css.downloadBtn}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span>{t.works.download}</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 10.5L7.5 0.5M7.5 10.5L3.5 6.5M7.5 10.5L11.5 6.5M1.5 13.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.a>
                </div>
            </div>


        </div>
    );
};

export default Works;
