
import styles from "@/assets/styles/header.module.css"
import Link from "next/link";
import { MdAddCard } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>Daily Expenses Monitoring</Link>
            <Link href="/" className={styles.logoSm}>D E M</Link>
            <nav className={styles.nav}>
                <Link href="/addexpenses">Add Expenses</Link>
                <Link href="/summary">Expenses Summary</Link>
                <Link href="/setlimit">Set Expenses Limit</Link>
                <div><CgProfile /></div>
                <Link href="/getstarted">Get Started</Link>
            </nav>
            <nav className={styles.navSm}>
                <Link href="/addexpenses"> <MdAddCard className={styles.btnIcon} /></Link>
                <Link href="/summary"> <FaListUl className={styles.btnIcon} /> </Link>
                <Link href="/setlimit"> <MdOutlineSystemUpdateAlt className={styles.btnIcon} /> </Link>
                <div><CgProfile className={styles.btnIcon} /></div>
                <Link href="/getstarted">Get Started</Link>
            </nav>
        </header>
    );
};

export default Header;