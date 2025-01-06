
import styles from "@/assets/styles/header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Daily Expenses Monitoring</div>
            <div className={styles.logoSm}>D E M</div>
            <nav className={styles.nav}>
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
            </nav>
            <nav className={styles.navSm}>
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
            </nav>
        </header>
    );
};

export default Header;