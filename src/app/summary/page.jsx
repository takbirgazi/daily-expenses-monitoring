"use client"
import Header from "@/components/Header/Header";
import { useEffect, useState } from 'react';
import styles from '@/assets/styles/summary.module.css';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "@/lib/features/expenses/getExpensesSlice";

const SummaryPage = () => {
    const { data: session } = useSession();
    // User Not Exist
    if (session == null) {
        redirect("/");
    }

    // Get Data using Redux 
    const monthlyExpenses = useSelector(state => state?.expensesData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExpenses(session?.user?.email))
    }, [dispatch])

    const calculateDailyTotal = (categories) =>
        categories.reduce((acc, category) => acc + parseInt(category.amount), 0);

    return (
        <div>
            <Header />
            <div className={styles.summaryPage}>
                <h1 className={styles.title}>Daily Expense Summary</h1>
                <div className={styles.summaryContainer}>
                    {monthlyExpenses?.expenses.map((day, index) => (
                        <div key={index} className={styles.daySummary}>
                            <h2 className={styles.date}>{day?.date}</h2>
                            <div className={styles.categories}>
                                {day.details.map((category, idx) => (
                                    <div key={idx} className={styles.category}>
                                        <div
                                            className={styles.tooltip}
                                            data-tooltip={category?.purpose}
                                        >
                                            <span className={styles.categoryName}>
                                                {category?.category}:
                                            </span>
                                            <span className={styles.categoryTotal}>
                                                ${category?.amount}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.dailyTotal}>
                                Total: ${calculateDailyTotal(day?.details)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
