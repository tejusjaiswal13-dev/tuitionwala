import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import styles from './page.module.css';

export default function About() {
    return (
        <>
            <Navbar />
            <main>
                <section className={styles.aboutHero}>
                    <div className="container">
                        <h1 className={styles.aboutTitle}>About TuitionWala</h1>
                        <p className={styles.aboutSubtitle}>
                            Your trusted partner in academic excellence
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className={styles.aboutContent}>
                            <div className={styles.aboutSection}>
                                <h2>Who We Are</h2>
                                <p>
                                    TuitionWala is a premier private tutoring organization based in Prayagraj (Allahabad),
                                    dedicated to providing quality education to students across all classes and boards.
                                    With years of experience and a team of qualified teachers, we have helped hundreds
                                    of students achieve their academic goals.
                                </p>
                            </div>

                            <div className={styles.aboutSection}>
                                <h2>Our Mission</h2>
                                <p>
                                    We believe in personalized learning that caters to each student's unique needs.
                                    Our mission is to make quality education accessible to every student in Prayagraj,
                                    whether through our well-equipped tuition center or through our home tuition services.
                                </p>
                            </div>

                            <div className={styles.aboutSection}>
                                <h2>Why Choose Us?</h2>
                                <ul className={styles.featuresList}>
                                    <li>✓ Experienced and qualified teachers</li>
                                    <li>✓ Small batch sizes for personalized attention</li>
                                    <li>✓ Comprehensive coverage of CBSE, ICSE, and State Board</li>
                                    <li>✓ Flexible timings to suit your schedule</li>
                                    <li>✓ Home tuition available across all areas of Prayagraj</li>
                                    <li>✓ Regular assessments and progress tracking</li>
                                    <li>✓ Affordable fees with quality education</li>
                                </ul>
                            </div>

                            <div className={styles.aboutSection}>
                                <h2>Our Commitment</h2>
                                <p>
                                    At TuitionWala, we are committed to helping students succeed academically.
                                    We focus on building strong fundamentals, developing problem-solving skills,
                                    and boosting confidence. Our teachers go beyond textbooks to ensure students
                                    truly understand concepts and can apply them effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>
    );
}
