import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navContent}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoText}>TuitionWala</span>
                    </Link>

                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/about" className={styles.navLink}>About Us</Link>
                        <Link href="/contact" className={styles.navLink}>Contact</Link>
                        <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                            Enquire Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className={styles.mobileMenuBtn} aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
