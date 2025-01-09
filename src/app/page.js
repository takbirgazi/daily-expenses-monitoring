"use client"

import styles from "@/assets/styles/landingPage.module.css";
import Header from "@/components/Header/Header";
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  if (session?.user) {
    redirect("/addexpenses")
  }
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
        <span className={styles.tooltip} data-tooltip="Join With Google">
          <button onClick={() => signIn('google')} className={styles.ctaButton}> Get Started</button>
        </span>
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
