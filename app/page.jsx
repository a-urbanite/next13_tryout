import styles from "./page.module.css";
import Card from "./(components)/Card";
import Footer from "./(components)/Footer";

export default async function Home() {
  const res = await fetch("https://swapi.dev/api/starships/");
  const data = await res.json();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js 13 with star wars shit</h1>
        <p className={styles.description}>Get started by choosing a category</p>
        <div className={styles.grid}>
          <a href="/starships"><button >starships please?</button></a>
          <a href="/characters"><button >characters</button></a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
