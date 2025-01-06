import styles from "@/assets/styles/loading.module.css"

const loading = () => {
    return (
        <div className={styles.loading}>
            <h2 className={styles.loadingText}>Loading...</h2>
        </div>
    );
};

export default loading;