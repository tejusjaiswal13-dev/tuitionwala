'use client';

import { useState } from 'react';
import styles from './Chatbot.module.css';

interface Message {
    text: string;
    isBot: boolean;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: 'Hello! How can I help you today?', isBot: true }
    ]);
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

    const faqs = [
        {
            question: 'What are your fees?',
            answer: 'Our fees vary by class and subject. Please contact us at +91 98765 43210 or submit an enquiry for detailed fee structure.'
        },
        {
            question: 'What are your timings?',
            answer: 'We offer flexible timings from 6:00 AM to 8:00 PM. Morning, afternoon, and evening batches available.'
        },
        {
            question: 'Which subjects do you teach?',
            answer: 'We teach all subjects for classes 1-12 including Math, Science, English, Social Studies, and more.'
        },
        {
            question: 'Do you provide home tuition?',
            answer: 'Yes! We provide home tuition services across all areas of Prayagraj with qualified and experienced tutors.'
        },
        {
            question: 'Which boards do you cover?',
            answer: 'We cover CBSE, ICSE, and UP State Board curricula with specialized teachers for each board.'
        },
        {
            question: 'Where is your center located?',
            answer: 'Our center is located at Sai Vihar Apartment, Church Lane, Tagore Town, near K K Nursery School, Prayagraj - 211002.'
        }
    ];

    const handleQuestionClick = (faq: { question: string; answer: string }) => {
        setMessages([
            ...messages,
            { text: faq.question, isBot: false },
            { text: faq.answer, isBot: true }
        ]);
        setSelectedQuestion(faq.question);
    };

    const resetChat = () => {
        setMessages([{ text: 'Hello! How can I help you today?', isBot: true }]);
        setSelectedQuestion(null);
    };

    return (
        <>
            {/* Chat Button */}
            <button
                className={styles.chatButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h3>TuitionWala Assistant</h3>
                        <button onClick={resetChat} className={styles.resetBtn}>
                            ↻ Reset
                        </button>
                    </div>

                    <div className={styles.chatMessages}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`${styles.message} ${msg.isBot ? styles.botMessage : styles.userMessage}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className={styles.chatQuestions}>
                        <p className={styles.questionsLabel}>Common Questions:</p>
                        <div className={styles.questionButtons}>
                            {faqs.map((faq, index) => (
                                <button
                                    key={index}
                                    className={styles.questionBtn}
                                    onClick={() => handleQuestionClick(faq)}
                                    disabled={selectedQuestion === faq.question}
                                >
                                    {faq.question}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
