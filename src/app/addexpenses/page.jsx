"use client"

import Header from "@/components/Header/Header";
import styles from '@/assets/styles/addexpenses.module.css';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postExpenses } from "@/lib/features/expenses/postExpensesSlice";

const AddExpensesPage = () => {
    const [updateMsg, setUpdateMsg] = useState("");
    // const { expenses } = useSelector(state => state.expenses);
    const dispatch = useDispatch();

    const { data: session } = useSession();
    // User Not Exist
    if (session == null) {
        redirect("/")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const amount = form.amount.value;
        const category = form.category.value;
        const purpose = form.purpose.value;
        const dateOb = new Date();
        const date = `${(String(dateOb.getDate()).padStart(2, "0"))}/${(String(dateOb.getMonth() + 1).padStart(2, "0"))}/${dateOb.getFullYear()}`;
        const email = session?.user?.email
        const body = { email, date, amount, category, purpose }
        dispatch(postExpenses(body))
            .then(async () => {
                await setUpdateMsg("Expenses Inserted!");
                form.reset()
            })
    };

    return (
        <div>
            <Header />
            <div className={styles.addExpensesPage}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Add New Expense</h1>
                    <div className={styles.updateMsg}>{updateMsg && updateMsg}</div>
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
                                required
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                <option value="Miscellaneous">Miscellaneous</option>
                                <option value="Groceries">Groceries</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Utility">Utility</option>
                                <option value="Charity">Charity</option>
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