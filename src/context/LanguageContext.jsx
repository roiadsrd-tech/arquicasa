import { createContext, useContext, useState } from 'react';

const translations = {
    en: {
        nav: {
            contact: 'Contact Us',
        },
        hero: {
            line1: 'Shaping',
            line2: "Tomorrow's",
            line3: 'Space.',
            studio: 'Arquicasa Studio',
            scroll: 'Scroll',
        },
        about: {
            headline: 'Architecture as a Sensory Experience.',
            p1: 'Arquicasa is an internationally recognized design studio focusing on contemporary architecture, interior design, and master planning. Our approach is rooted in a deep understanding of materials, light, and proportion.',
            p2: 'We believe spaces should not only be functional but evoke emotion, creating environments that are timeless, elegant, and perfectly integrated with their surroundings. Every line drawn is intentional, every structure built is a testament to our commitment to structural poetry.',
            cta: 'View Projects',
        },
        story: {
            label: '● OUR STORY',
            title: 'A LEGACY OF DESIGN EXCELLENCE',
            p1: 'Founded in 2010 by Josué Mallén, Arquicasa Studio was built on a simple premise: architecture should respond to its environment. What started as a small, passionate team has grown into a multi-disciplinary practice executing projects of significant scale across various sectors.',
            p2: 'From the rolling hills to the dense urban fabric, our story is one of adapting, innovating, and bringing structural integrity to every vision we encounter.',
            yearsLabel: 'Years of Excellence',
            projectsLabel: 'Projects Completed',
            awardsLabel: 'Capabilities Showcased',
        },
        works: {
            label: '● PROJECTS',
            headline1: 'SELECTED',
            headline2: 'PROJECTS',
            download: 'Download Portfolio',
        },
        process: {
            label: '● PROCESS',
            title: 'HOW WE WORK',
            steps: [
                { title: 'Discovery & Vision', desc: 'Understanding the site, context, and client aspirations to define the structural goals.' },
                { title: 'Concept & Design', desc: 'Crafting the initial architectural concepts, spatial planning, and material selection.' },
                { title: 'Collaboration & Build', desc: 'Working closely with engineers, contractors, and artisans to ensure structural integrity.' },
                { title: 'Delivery & Impact', desc: 'Handover of a timeless space that positively impacts its environment and users.' },
            ],
        },
        footer: {
            label: '● START YOUR PROJECT',
            headline1: "LET'S BUILD",
            headline2: 'TOGETHER.',
            whatsapp: 'WhatsApp',
            portfolio: 'Portfolio',
            copyright: 'Arquicasa Studio.',
            instagram: 'Instagram',
        },
    },
    es: {
        nav: {
            contact: 'Contáctanos',
        },
        hero: {
            line1: 'Diseñando',
            line2: 'Los Espacios',
            line3: 'del Mañana.',
            studio: 'Arquicasa Studio',
            scroll: 'Bajar',
        },
        about: {
            headline: 'Arquitectura como Experiencia Sensorial.',
            p1: 'Arquicasa es un estudio de diseño reconocido internacionalmente, especializado en arquitectura contemporánea, diseño de interiores y planificación urbana. Nuestro enfoque se basa en una profunda comprensión de los materiales, la luz y la proporción.',
            p2: 'Creemos que los espacios no solo deben ser funcionales, sino también evocar emociones, creando entornos atemporales, elegantes y perfectamente integrados con su entorno. Cada línea está trazada con intención, y cada estructura construida es un testimonio de nuestro compromiso con la poesía estructural.',
            cta: 'Ver Proyectos',
        },
        story: {
            label: '● NUESTRA HISTORIA',
            title: 'UN LEGADO DE EXCELENCIA EN DISEÑO',
            p1: 'Fundado en 2010 por Josué Mallén, Arquicasa Studio fue construido sobre una premisa simple: la arquitectura debe responder a su entorno. Lo que comenzó como un pequeño y apasionado equipo se ha convertido en una práctica multidisciplinaria que ejecuta proyectos de gran envergadura en diversos sectores.',
            p2: 'Desde las colinas hasta el tejido urbano denso, nuestra historia es de adaptación, innovación y aporte de integridad estructural a cada visión que encontramos.',
            yearsLabel: 'Años de Excelencia',
            projectsLabel: 'Proyectos Completados',
            awardsLabel: 'Capacidades Demostradas',
        },
        works: {
            label: '● PROYECTOS',
            headline1: 'PROYECTOS',
            headline2: 'SELECCIONADOS',
            download: 'Descargar Portafolio',
        },
        process: {
            label: '● PROCESO',
            title: 'CÓMO TRABAJAMOS',
            steps: [
                { title: 'Descubrimiento y Visión', desc: 'Entendemos el sitio, el contexto y las aspiraciones del cliente para definir los objetivos estructurales.' },
                { title: 'Concepto y Diseño', desc: 'Elaboramos los conceptos arquitectónicos iniciales, la planificación espacial y la selección de materiales.' },
                { title: 'Colaboración y Construcción', desc: 'Trabajamos estrechamente con ingenieros, contratistas y artesanos para garantizar la integridad estructural.' },
                { title: 'Entrega e Impacto', desc: 'Entrega de un espacio atemporal que impacta positivamente en su entorno y en sus usuarios.' },
            ],
        },
        footer: {
            label: '● INICIA TU PROYECTO',
            headline1: 'CONSTRUYAMOS',
            headline2: 'JUNTOS.',
            whatsapp: 'WhatsApp',
            portfolio: 'Portafolio',
            copyright: 'Arquicasa Studio.',
            instagram: 'Instagram',
        },
    },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');
    const t = translations[lang];
    const toggleLang = () => setLang(l => l === 'en' ? 'es' : 'en');

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
