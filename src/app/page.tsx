import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
              <p className={styles.ctaText}>
                Join hundreds of students who have improved their grades with TuitionWala
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact TuitionWala
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>
  );
}
