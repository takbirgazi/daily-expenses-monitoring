"use client"

import Header from "@/components/Header/Header";
import { useState } from 'react';
import styles from '@/assets/styles/addexpenses.module.css';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

const AddExpensesPage = () => {
    const { data: session } = useSession();
    // User Not Exist
    if (session == null) {
        redirect("/")
    }

    const [expense, setExpense] = useState({
        amount: '',
        category: '',
        purpose: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Expense Submitted:', expense);
        // Add expense to the database or state here
        setExpense({
            amount: '',
            category: '',
            purpose: '',
            date: '',
        });
    };

    return (
        <div>
            <Header />
            <div className={styles.addExpensesPage}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Add New Expense</h1>
                    <form className={styles.expenseForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="amount" className={styles.label}>
                                Expense Amount
                            </label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                placeholder="Enter amount"
                                className={styles.input}
                                value={expense.amount}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="category" className={styles.label}>
                                Expense Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                className={styles.select}
                                value={expense.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                <option value="Groceries">Groceries</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Utility">Utility</option>
                                <option value="Charity">Charity</option>
                                <option value="Miscellaneous">Miscellaneous</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="purpose" className={styles.label}>
                                Expense Purpose
                            </label>
                            <input
                                type="text"
                                id="purpose"
                                name="purpose"
                                placeholder="Enter purpose"
                                className={styles.input}
                                value={expense.purpose}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="date" className={styles.label}>
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className={styles.input}
                                value={expense.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.addButton}>
                            Add Expense
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddExpensesPage;