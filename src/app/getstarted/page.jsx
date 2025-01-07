
import styles from '@/assets/styles/getstarted.module.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

const SignUpPage = () => {
    return (
        <div className={styles.signupPage}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Join Us!</h1>
                <p className={styles.subtitle}>Create an account to manage your daily expenses</p>
                <div className={styles.socialBtnCont}>
                    <button type="submit" className={styles.signupButton}>
                        <FcGoogle className={styles.btIcon} /><span className={styles.btnText}>Continue With Google</span>
                    </button>
                    <button type="submit" className={styles.signupButton}>
                        <FaGithub className={styles.btIcon} /><span className={styles.btnText}>Continue With GitHub</span>
                    </button>
                    <button type="submit" className={styles.signupButton}>
                        <FaFacebook className={styles.btIcon} /><span className={styles.btnText}>Continue With Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;