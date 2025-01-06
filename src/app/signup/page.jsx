
import styles from '@/assets/styles/signup.module.css';

const SignUpPage = () => {
    return (
        <div className={styles.signupPage}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Join Us!</h1>
                <p className={styles.subtitle}>Create an account to manage your daily expenses</p>
                <form className={styles.signupForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            className={styles.input}
                            required
                        />
                    </div>
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
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword" className={styles.label}>
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Re-enter your password"
                            className={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.signupButton}>
                        Sign Up
                    </button>
                </form>
                <div className={styles.footer}>
                    <p>
                        Already have an account?{' '}
                        <a href="/login" className={styles.link}>
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;