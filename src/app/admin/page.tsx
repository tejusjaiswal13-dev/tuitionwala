'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

interface Enquiry {
    id: number;
    name: string;
    phone: string;
    studentClass: string;
    board: string;
    tuitionType: string;
    locality: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const response = await fetch('/api/admin/enquiries');

            if (response.status === 401) {
                router.push('/admin/login');
                return;
            }

            if (response.ok) {
                const data = await response.json();
                setEnquiries(data.enquiries);
            } else {
                setError('Failed to fetch enquiries');
            }
        } catch (err) {
            setError('Error loading enquiries');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        document.cookie = 'admin_token=; Max-Age=0; path=/;';
        router.push('/admin/login');
    };

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loading}>Loading...</div>
            </div>
        );
    }

    return (
        <div className={styles.dashboardPage}>
            <div className={styles.dashboardHeader}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <h1>TuitionWala Admin Dashboard</h1>
                        <button onClick={handleLogout} className="btn btn-secondary">
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.dashboardContent}>
                    <div className={styles.statsCard}>
                        <h2>Total Enquiries</h2>
                        <p className={styles.statsNumber}>{enquiries.length}</p>
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <div className={styles.enquiriesSection}>
                        <h2>All Enquiries</h2>

                        {enquiries.length === 0 ? (
                            <p className={styles.noData}>No enquiries yet.</p>
                        ) : (
                            <div className={styles.tableContainer}>
                                <table className={styles.enquiriesTable}>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Class</th>
                                            <th>Board</th>
                                            <th>Type</th>
                                            <th>Locality</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {enquiries.map((enquiry) => (
                                            <tr key={enquiry.id}>
                                                <td>{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                                                <td>{enquiry.name}</td>
                                                <td>{enquiry.phone}</td>
                                                <td>{enquiry.studentClass}</td>
                                                <td>{enquiry.board}</td>
                                                <td>{enquiry.tuitionType}</td>
                                                <td>{enquiry.locality}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
