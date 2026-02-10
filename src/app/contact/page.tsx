'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        studentClass: '',
        board: 'CBSE',
        tuitionType: 'Center',
        locality: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        try {
            const response = await fetch('/api/enquire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Thank you! We will contact you soon.' });
                setFormData({
                    name: '',
                    phone: '',
                    studentClass: '',
                    board: 'CBSE',
                    tuitionType: 'Center',
                    locality: ''
                });
            } else {
                setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to submit. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <main>
                <section className={styles.contactHero}>
                    <div className="container">
                        <h1 className={styles.contactTitle}>Contact Us</h1>
                        <p className={styles.contactSubtitle}>
                            Get in touch for admission enquiries
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className={styles.contactGrid}>
                            {/* Enquiry Form */}
                            <div className={styles.formContainer}>
                                <h2>Admission Enquiry</h2>
                                <form onSubmit={handleSubmit} className={styles.enquiryForm}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Parent / Student Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={styles.formInput}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className={styles.formInput}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="studentClass">Class *</label>
                                        <input
                                            type="text"
                                            id="studentClass"
                                            name="studentClass"
                                            value={formData.studentClass}
                                            onChange={handleChange}
                                            placeholder="e.g., 10th"
                                            required
                                            className={styles.formInput}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="board">Board *</label>
                                        <select
                                            id="board"
                                            name="board"
                                            value={formData.board}
                                            onChange={handleChange}
                                            required
                                            className={styles.formInput}
                                        >
                                            <option value="CBSE">CBSE</option>
                                            <option value="ICSE">ICSE</option>
                                            <option value="State Board">State Board</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="tuitionType">Type of Tuition *</label>
                                        <select
                                            id="tuitionType"
                                            name="tuitionType"
                                            value={formData.tuitionType}
                                            onChange={handleChange}
                                            required
                                            className={styles.formInput}
                                        >
                                            <option value="Center">Center Tuition</option>
                                            <option value="Home">Home Tuition</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="locality">Area / Locality in Prayagraj *</label>
                                        <input
                                            type="text"
                                            id="locality"
                                            name="locality"
                                            value={formData.locality}
                                            onChange={handleChange}
                                            placeholder="e.g., Civil Lines"
                                            required
                                            className={styles.formInput}
                                        />
                                    </div>

                                    {message && (
                                        <div className={`${styles.message} ${styles[message.type]}`}>
                                            {message.text}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`btn btn-primary ${styles.submitBtn}`}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className={styles.contactInfo}>
                                <h2>Visit Our Tuition Center</h2>
                                <div className={styles.infoCard}>
                                    <h3>📍 Address</h3>
                                    <p>
                                        Side of Sai Vihar Apartment,<br />
                                        Church Lane, Tagore Town<br />
                                        Holly Trinity School Road Front<br />
                                        Near K K Nursery School<br />
                                        Prayagraj, Uttar Pradesh - 211002
                                    </p>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3>📞 Phone</h3>
                                    <p>+91 81828 37919</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3>🕒 Timings</h3>
                                    <p>
                                        Monday - Saturday<br />
                                        6:00 AM - 8:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
