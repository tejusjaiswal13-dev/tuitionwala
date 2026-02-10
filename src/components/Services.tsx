import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            icon: '🏫',
            title: 'School Tuition',
            description: 'Expert coaching at our center with small batch sizes for personalized attention.'
        },
        {
            icon: '🏠',
            title: 'Home Tuition',
            description: 'Qualified tutors come to your home across all areas of Prayagraj.'
        },
        {
            icon: '📖',
            title: 'All Boards',
            description: 'CBSE, ICSE, and State Board curriculum covered by experienced teachers.'
        },
        {
            icon: '🎯',
            title: 'Proven Results',
            description: 'Track record of helping students achieve academic excellence.'
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className={styles.servicesHeader}>
                    <h2 className={styles.servicesTitle}>Our Services</h2>
                    <p className={styles.servicesSubtitle}>
                        Comprehensive tuition solutions tailored to your child's needs
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={`card ${styles.serviceCard}`}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
