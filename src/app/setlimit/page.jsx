"use client"
import Header from "@/components/Header/Header";
import { useEffect, useState } from 'react';
import styles from '@/assets/styles/setlimit.module.css';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { postExpensesLimit } from "@/lib/features/expensesLimit/postExpensesLimitSlice";
import { getExpensesLimit } from "@/lib/features/expensesLimit/getExpensesLimitSlice";

const SetExpensesLimit = () => {
    const [updateMsg, setUpdateMsg] = useState("");
    const { data: session } = useSession();
    // User Not Exist
    if (session == null) {
        redirect("/")
    }
    const monthlyExpensesLimit = useSelector(state => state?.ExpensesLimitData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExpensesLimit(session?.user?.email));
    }, [dispatch])

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
        const email = session?.user?.email;
        // If all value are 0
        if (limits.Charity === 0 && limits.Groceries === 0 && limits.Healthcare === 0 && limits.Miscellaneous === 0 && limits.Transportation === 0 && limits.Utility === 0) {
            setUpdateMsg("Please Input an amount");
            return
        }

        const dbDate = monthlyExpensesLimit?.expenses?.date;
        const dateOb = new Date();
        const date = `${(String(dateOb.getDate()).padStart(2, "0"))}/${(String(dateOb.getMonth() + 1).padStart(2, "0"))}/${dateOb.getFullYear()}`;
        // if today inserted data already 
        if (dbDate === date) {
            setUpdateMsg("You have already inserted today. Please try again tomorrow!");
            return
        }
        const body = {
            date,
            email,
            limitsCat: Object.entries(limits).map(([category, amount]) => ({
                category,
                amount
            })),
        }

        dispatch(postExpensesLimit(body))
            .then(() => {
                setUpdateMsg("Expenses Limit Inserted!");
                setLimits({
                    Groceries: 0,
                    Transportation: 0,
                    Healthcare: 0,
                    Utility: 0,
                    Charity: 0,
                    Miscellaneous: 0,
                })
            })
    };

    return (
        <div>
            <Header />
            <div className={styles.limitPage}>
                <h1 className={styles.title}>Set Monthly Spending Limits</h1>
                <div className={styles.updateMsg}>{updateMsg && updateMsg}</div>
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