
import styles from "@/assets/styles/header.module.css"
import Link from "next/link";
import { MdAddCard } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { useSession, signIn, signOut } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";

const Header = () => {
    const { data: session } = useSession();
    // Log Out the user
    const logoutHandler = () => {
        signOut();
    }
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>Daily Expenses Monitoring</Link>
            <Link href="/" className={styles.logoSm}>D E M</Link>
            <nav className={styles.nav}>
                {
                    (session?.user) ?
                        <>
                            <Link href="/addexpenses">Add Expenses</Link>
                            <Link href="/summary">Expenses Summary</Link>
                            <Link href="/setlimit">Set Expenses Limit</Link>
                            <div onClick={logoutHandler} data-tooltip={session?.user?.name} className={`${styles.ctaButton} ${styles.tooltip}`}> Log Out</div>
                        </> : <div onClick={() => signIn('google')} className={styles.ctaButton}> Join With Google</div>
                }
            </nav>
            <nav className={styles.navSm}>
                {
                    (session?.user) ?
                        <>
                            <Link href="/addexpenses"> <MdAddCard className={styles.btnIcon} /></Link>
                            <Link href="/summary"> <FaListUl className={styles.btnIcon} /> </Link>
                            <Link href="/setlimit"> <MdOutlineSystemUpdateAlt className={styles.btnIcon} /></Link>
                            <div onClick={logoutHandler} data-tooltip={session?.user?.name}><TbLogout className={`${styles.btnIcon} ${styles.tooltip}`} /></div>
                        </> : <div onClick={() => signIn('google')} className={styles.ctaButton}> <FcGoogle className={styles.btnIcon} /></div>
                }
            </nav>
        </header>
    );
};

export default Header;