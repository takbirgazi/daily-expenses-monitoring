"use client"
import styles from "@/assets/styles/homepage.module.css";
import { useSelector } from "react-redux";


export default function Home() {
  const todo = useSelector(state => state?.todo);
  console.log(todo)
  return (
    <div className={styles.main}>
      <h2>Hello world</h2>
    </div>
  );
}
