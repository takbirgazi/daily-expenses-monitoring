"use client"
import Header from "@/components/Header/Header";
import { useEffect, useRef, useState } from 'react';
import styles from '@/assets/styles/summary.module.css';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "@/lib/features/expenses/getExpensesSlice";
import { getExpensesLimit } from "@/lib/features/expensesLimit/getExpensesLimitSlice";

const SummaryPage = () => {
    const [expLimit, setExpLimit] = useState(0)
    const monthTotalRef = useRef();
    const { data: session } = useSession();
    // User Not Exist
    if (session == null) {
        redirect("/");
    }

    const dailyLimit = parseInt(monthTotalRef?.current?.innerText) / 30

    // Get Data using Redux 
    const monthlyExpenses = useSelector(state => state?.expensesData);
    const monthlyExpensesLimit = useSelector(state => state?.ExpensesLimitData);
    const dispatch = useDispatch();
    // console.log(monthlyExpensesLimit)
    useEffect(() => {
        dispatch(getExpenses(session?.user?.email));
        dispatch(getExpensesLimit(session?.user?.email));
        // dispatch(getExpensesLimit());

    }, [dispatch])

    const calculateDailyTotal = (categories) => {
        return (categories.reduce((acc, category) => acc + parseInt(category.amount), 0));
    }

    useEffect(() => {
        // Access limitsCat
        if (monthlyExpensesLimit.expenses && Array.isArray(monthlyExpensesLimit.expenses.limitsCat)) {
            const totalAmount = monthlyExpensesLimit.expenses.limitsCat.reduce((total, item) => total + item.amount, 0);
            setExpLimit(totalAmount);
        }
        return
    }, [monthlyExpensesLimit])

    return (
        <div>
            <Header />
            <div className={styles.summaryPage}>
                <h1 className={styles.title}>Daily Expense Summary</h1>
                <div className={styles.summaryContainer}>
                    {monthlyExpenses?.expenses?.length <= 0 && <strong>No Data Found</strong>}
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
                                <span className={styles.tooltip2}
                                    data-tooltip={calculateDailyTotal(day?.details) > dailyLimit ? "You are over your approximately daily limit" : null}>

                                    <span className={calculateDailyTotal(day?.details) > dailyLimit && "dailyTotalOverLimit"}>Total: ${calculateDailyTotal(day?.details)}
                                    </span>

                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Monthly Expense Limit  */}
            <div className={styles.summaryPage}>
                <h1 className={styles.title}>Monthly Expense Limit</h1>
                <div className={styles.summaryContainer}>
                    {monthlyExpensesLimit?.expenses?.limitsCat?.length <= 0 && <strong>No Data Found</strong>}
                    <div className={styles.daySummary}>
                        <h2 className={styles.date}>{monthlyExpensesLimit?.expenses?.date}</h2>
                        <div className={styles.categories}>
                            {
                                monthlyExpensesLimit?.expenses?.limitsCat?.map((cat, ind) => <div key={ind} className={styles.category}>
                                    <span className={styles.categoryName}>
                                        {cat?.category}
                                    </span>
                                    <span className={styles.categoryTotal}>
                                        ${cat?.amount}
                                    </span>
                                </div>)
                            }
                        </div>
                        <div className={styles.dailyTotal}>
                            Total: $<span ref={monthTotalRef}> {expLimit}</span>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default SummaryPage;
