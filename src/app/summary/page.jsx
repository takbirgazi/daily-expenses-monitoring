"use client"
import Header from "@/components/Header/Header";
import React, { useState, useEffect } from 'react';
import styles from '@/assets/styles/summary.module.css';

const SummaryPage = () => {
    const [expenses, setExpenses] = useState([
        {
            date: '2025-01-01',
            categories: [
                { name: 'Groceries', total: 100, details: 'Groceries for the week' },
                { name: 'Transportation', total: 50, details: 'Bus fare' },
                { name: 'Healthcare', total: 30, details: 'Pharmacy' },
            ],
        },
        {
            date: '2025-01-02',
            categories: [
                { name: 'Utility', total: 80, details: 'Electricity bill' },
                { name: 'Charity', total: 20, details: 'Donation' },
                { name: 'Miscellaneous', total: 40, details: 'Books' },
            ],
        },
    ]);

    const calculateDailyTotal = (categories) =>
        categories.reduce((acc, category) => acc + category.total, 0);

    return (
        <div>
            <Header />
            <div className={styles.summaryPage}>
                <h1 className={styles.title}>Daily Expense Summary</h1>
                <div className={styles.summaryContainer}>
                    {expenses.map((day, index) => (
                        <div key={index} className={styles.daySummary}>
                            <h2 className={styles.date}>{day.date}</h2>
                            <div className={styles.categories}>
                                {day.categories.map((category, idx) => (
                                    <div key={idx} className={styles.category}>
                                        <div
                                            className={styles.tooltip}
                                            data-tooltip={category.details}
                                        >
                                            <span className={styles.categoryName}>
                                                {category.name}:
                                            </span>
                                            <span className={styles.categoryTotal}>
                                                ${category.total}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.dailyTotal}>
                                Total: ${calculateDailyTotal(day.categories)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
