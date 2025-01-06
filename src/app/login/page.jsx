import styles from '@/assets/styles/login.module.css';

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Welcome Back!</h1>
                <p className={styles.subtitle}>Log in to manage your daily expenses</p>
                <form className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.loginButton}>
                        Log In
                    </button>
                </form>
                <div className={styles.footer}>
                    <p>
                        Don’t have an account?{' '}
                        <a href="/signup" className={styles.link}>
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;