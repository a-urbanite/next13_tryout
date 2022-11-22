"use client"
import styles from "./page.module.css";
import Footer from "./(components)/Footer";
import { useState } from "react";

export default function Home() {
  const [category, setcategory] = useState();

  const chooseCategory = (value) => {
    // console.log(category)
    setcategory(value)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js 13 with star wars shit</h1>
        <p className={styles.description}>Get started by choosing a category</p>
        <div className={styles.grid}>
          <button onClick={(e) => chooseCategory(e.target.value)} value='1'>dynamic routing 1</button>
          <button onClick={(e) => chooseCategory(e.target.value)} value='2'>dynamic routing 2</button>
          <a href="/starships"><button>starships please?</button></a>
          <a href="/characters"><button>characters</button></a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
