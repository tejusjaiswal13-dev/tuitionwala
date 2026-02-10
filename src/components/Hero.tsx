import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            Trusted Tuition & Home Tutors in Prayagraj
                        </h1>
                        <p className={styles.heroDescription}>
                            Quality education with experienced teachers, personal attention, and proven results.
                            Home tuition available across all areas of Prayagraj.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/contact" className="btn btn-primary">
                                Enquire Now
                            </Link>
                            <Link href="/about" className="btn btn-secondary">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroImage}>
                        <div className={styles.imagePlaceholder}>
                            <span>📚</span>
                            <p>Photo Gallery Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
