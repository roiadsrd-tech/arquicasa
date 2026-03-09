import css from './Clients.module.css';

const clients = [
    { id: 1, name: 'AME', img: '/ame.avif' },
    { id: 2, name: 'BRAV', img: '/brav.avif' },
    { id: 3, name: 'HUM', img: '/hum.avif' },
    { id: 4, name: 'ICC', img: '/icc.avif' },
    { id: 5, name: 'ROLL', img: '/roll.avif' }
];

const Clients = () => {
    return (
        <section className={css.clientsSection}>
            <div className={css.labelContainer}>
                <span className={css.label}>TRUSTED BY</span>
            </div>
            <div className={css.marqueeWrapper}>
                <div className={css.marqueeContent}>
                    {/* Render the logos twice to create a seamless infinite scroll loop */}
                    {[...clients, ...clients].map((client, index) => (
                        <div key={`${client.id}-${index}`} className={css.logoItem}>
                            <img src={client.img} alt={`${client.name} logo`} className={css.logo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
