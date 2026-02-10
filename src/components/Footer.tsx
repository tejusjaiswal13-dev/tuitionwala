import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>TuitionWala</h3>
                        <p className={styles.footerText}>
                            Quality education with experienced teachers. Helping students succeed academically across Prayagraj.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Quick Links</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/admin/login">Admin Login</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Visit Our Center</h4>
                        <p className={styles.footerText}>
                            Side of Sai Vihar Apartment,<br />
                            Church Lane, Tagore Town<br />
                            Holly Trinity School Road Front<br />
                            Near K K Nursery School<br />
                            Prayagraj, Uttar Pradesh - 211002<br />
                            Phone: +91 81828 37919
                        </p>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} TuitionWala. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
