"use client"

import styles from "@/assets/styles/landingPage.module.css";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  const todo = useSelector(state => state?.todo);
  console.log(todo)
  return (
    <div className={styles.landingPage}>
      {/* This is Leader and Navbar  */}
      <Header />
      <section className={styles.hero}>
        <h1>Track Your Expenses, Manage Your Finances</h1>
        <p>
          Stay in control of your spending with our simple and efficient expense
          tracking app.
        </p>
        <Link href="/getstarted" className={styles.ctaButton}> Get Started</Link>
      </section>

      <section id="features" className={styles.features}>
        <h2>Features</h2>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <h3>Expense Input</h3>
            <p>Easily add expenses by category and purpose.</p>
          </div>
          <div className={styles.feature}>
            <h3>Spending Limits</h3>
            <p>Set monthly and category-specific spending limits.</p>
          </div>
          <div className={styles.feature}>
            <h3>Daily Summaries</h3>
            <p>View categorized expense summaries for each day.</p>
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>
          Daily Expenses Monitoring is a web application designed to help users
          organize their expenses and stay within their budgets. Our goal is to
          simplify financial management for everyone.
        </p>
      </section>

      <footer id="contact" className={styles.footer}>
        <h2>Contact Us</h2>
        <p>Email: takbirgazibd@gmail.com</p>
        <p>Phone: +8801811947182</p>
      </footer>
    </div>
  );
}
