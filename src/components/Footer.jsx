import { motion } from 'framer-motion';
import css from './Footer.module.css';
import { useLang } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLang();
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <motion.div
                    className={css.main}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
                    }}
                >
                    {/* Architectural blueprint background */}
                    <svg className={css.blueprint} viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        {/* Grid */}
                        <defs>
                            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.4" />
                            </pattern>
                            <pattern id="grid" width="200" height="200" patternUnits="userSpaceOnUse">
                                <rect width="200" height="200" fill="url(#smallGrid)" />
                                <path d="M 200 0 L 0 0 0 200" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Floor plan outline */}
                        <rect x="80" y="80" width="300" height="200" fill="none" stroke="white" strokeWidth="2" />
                        <rect x="80" y="80" width="120" height="90" fill="none" stroke="white" strokeWidth="1.2" />
                        <rect x="200" y="80" width="180" height="90" fill="none" stroke="white" strokeWidth="1.2" />
                        <rect x="80" y="170" width="300" height="110" fill="none" stroke="white" strokeWidth="1.2" />

                        {/* Door swing */}
                        <path d="M 200 80 Q 240 120 200 170" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="200" y1="80" x2="200" y2="120" stroke="white" strokeWidth="1.2" />

                        {/* Dimension lines top */}
                        <line x1="80" y1="55" x2="380" y2="55" stroke="white" strokeWidth="1" />
                        <line x1="80" y1="50" x2="80" y2="60" stroke="white" strokeWidth="1" />
                        <line x1="380" y1="50" x2="380" y2="60" stroke="white" strokeWidth="1" />
                        <text x="230" y="50" textAnchor="middle" fontSize="12" fill="white" fontFamily="monospace">12,500</text>

                        {/* Dimension lines left */}
                        <line x1="55" y1="80" x2="55" y2="280" stroke="white" strokeWidth="1" />
                        <line x1="50" y1="80" x2="60" y2="80" stroke="white" strokeWidth="1" />
                        <line x1="50" y1="280" x2="60" y2="280" stroke="white" strokeWidth="1" />
                        <text x="45" y="185" textAnchor="middle" fontSize="12" fill="white" fontFamily="monospace" transform="rotate(-90, 45, 185)">8,000</text>

                        {/* Elevation cross section - right side */}
                        <rect x="500" y="100" width="280" height="180" fill="none" stroke="white" strokeWidth="2" />
                        {/* Roof line */}
                        <path d="M 500 100 L 640 30 L 780 100" fill="none" stroke="white" strokeWidth="2" />
                        {/* Interior floors */}
                        <line x1="500" y1="200" x2="780" y2="200" stroke="white" strokeWidth="1" />
                        {/* Windows */}
                        <rect x="530" y="120" width="50" height="60" fill="none" stroke="white" strokeWidth="1" />
                        <line x1="555" y1="120" x2="555" y2="180" stroke="white" strokeWidth="0.8" />
                        <rect x="700" y="120" width="50" height="60" fill="none" stroke="white" strokeWidth="1" />
                        <line x1="725" y1="120" x2="725" y2="180" stroke="white" strokeWidth="0.8" />
                        {/* Door */}
                        <rect x="610" y="220" width="60" height="60" fill="none" stroke="white" strokeWidth="1.2" />

                        {/* Compass rose */}
                        <circle cx="1080" cy="120" r="40" fill="none" stroke="white" strokeWidth="1" />
                        <circle cx="1080" cy="120" r="4" fill="white" />
                        <line x1="1080" y1="120" x2="1080" y2="70" stroke="white" strokeWidth="1.5" />
                        <polygon points="1080,65 1073,80 1087,80" fill="white" />
                        <line x1="1080" y1="120" x2="1080" y2="170" stroke="white" strokeWidth="1" />
                        <line x1="1080" y1="120" x2="1030" y2="120" stroke="white" strokeWidth="1" />
                        <line x1="1080" y1="120" x2="1130" y2="120" stroke="white" strokeWidth="1" />
                        <text x="1080" y="60" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace" fontWeight="bold">N</text>
                        <text x="1080" y="186" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">S</text>
                        <text x="1018" y="124" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">W</text>
                        <text x="1142" y="124" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">E</text>

                        {/* Title block */}
                        <rect x="900" y="280" width="260" height="180" fill="none" stroke="white" strokeWidth="1.5" />
                        <line x1="900" y1="310" x2="1160" y2="310" stroke="white" strokeWidth="1" />
                        <line x1="900" y1="360" x2="1160" y2="360" stroke="white" strokeWidth="0.8" />
                        <line x1="900" y1="400" x2="1160" y2="400" stroke="white" strokeWidth="0.8" />
                        <text x="1030" y="302" textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">ARQUICASA STUDIO</text>
                        <text x="1030" y="340" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">PROJECT DRAWINGS</text>
                        <text x="930" y="380" fontSize="8" fill="white" fontFamily="monospace">DATE: 2025</text>
                        <text x="1060" y="380" fontSize="8" fill="white" fontFamily="monospace">SCALE: 1:100</text>
                        <text x="930" y="420" fontSize="8" fill="white" fontFamily="monospace">REV: A</text>
                        <text x="1060" y="420" fontSize="8" fill="white" fontFamily="monospace">SHEET: 01</text>
                        <text x="930" y="450" fontSize="8" fill="white" fontFamily="monospace">ARCH. J. MALLÉN</text>

                        {/* Site plan circles/trees */}
                        <circle cx="900" cy="150" r="25" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="900" cy="150" r="12" fill="none" stroke="white" strokeWidth="1" />
                        <circle cx="950" cy="220" r="20" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="950" cy="220" r="9" fill="none" stroke="white" strokeWidth="1" />

                        {/* Scale bar */}
                        <line x1="80" y1="420" x2="280" y2="420" stroke="white" strokeWidth="1.5" />
                        <rect x="80" y="415" width="40" height="10" fill="white" />
                        <rect x="120" y="415" width="40" height="10" fill="none" stroke="white" strokeWidth="1" />
                        <rect x="160" y="415" width="40" height="10" fill="white" />
                        <rect x="200" y="415" width="40" height="10" fill="none" stroke="white" strokeWidth="1" />
                        <rect x="240" y="415" width="40" height="10" fill="white" />
                        <text x="80" y="440" fontSize="9" fill="white" fontFamily="monospace">0</text>
                        <text x="155" y="440" fontSize="9" fill="white" fontFamily="monospace">5m</text>
                        <text x="270" y="440" fontSize="9" fill="white" fontFamily="monospace">10m</text>
                    </svg>
                    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}>
                        <div className={css.label}>{t.footer.label}</div>
                        <h2>{t.footer.headline1} <br /> {t.footer.headline2}</h2>
                    </motion.div>
                </motion.div>

                <motion.div
                    id="contact"
                    className={css.bottom}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p>&copy; {new Date().getFullYear()} <br /> Arquicasa Studio.</p>

                    <div className={css.contactInfo}>
                        <a href="mailto:josuemallen@gmail.com" className={css.email}>josuemallen@gmail.com</a>
                        <p className={css.address}>Tel: 809 389 0799 | Architect Josué Mallén</p>
                        <div className={css.btnGroup}>
                            <a href="https://wa.me/18093890799" target="_blank" rel="noopener noreferrer" className={`${css.footerBtn} ${css.primaryBtn}`}>
                                WhatsApp
                            </a>
                            <a href="/portfolio.pdf" download className={`${css.footerBtn} ${css.secondaryBtn}`}>
                                Portfolio
                            </a>
                        </div>
                    </div>

                    <div className={css.social}>
                        <motion.a href="https://www.instagram.com/jmlarquicasa/reels/?hl=en" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>{t.footer.instagram}</motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className={css.bigTitleWrapper}
                initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 100 }}
                whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <h1 className={css.bigTitle}>ARQUICASA</h1>
            </motion.div>
        </footer>
    );
};

export default Footer;
