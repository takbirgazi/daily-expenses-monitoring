"use client"
import Header from "@/components/Header/Header";
import { useState } from 'react';
import styles from '@/assets/styles/setlimit.module.css';

const SetExpensesLimit = () => {
    const [limits, setLimits] = useState({
        Groceries: 0,
        Transportation: 0,
        Healthcare: 0,
        Utility: 0,
        Charity: 0,
        Miscellaneous: 0,
    });

    const handleInputChange = (category, value) => {
        setLimits({
            ...limits,
            [category]: parseFloat(value) || 0,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Limits set:', limits);
        alert('Spending limits have been saved successfully!');
    };

    return (
        <div>
            <Header />
            <div className={styles.limitPage}>
                <h1 className={styles.title}>Set Monthly Spending Limits</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {Object.keys(limits).map((category) => (
                        <div key={category} className={styles.inputGroup}>
                            <label htmlFor={category} className={styles.label}>
                                {category}
                            </label>
                            <input
                                type="number"
                                id={category}
                                className={styles.input}
                                value={limits[category]}
                                onChange={(e) => handleInputChange(category, e.target.value)}
                                placeholder={`Enter limit for ${category}`}
                                min="0"
                            />
                        </div>
                    ))}
                    <button type="submit" className={styles.submitButton}>
                        Save Limits
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SetExpensesLimit;