import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {
  const res = await fetch('https://swapi.dev/api/starships/');
  const data = await res.json();
  // console.log(data.results.length)



  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          Get startesaddasfafasd by editing{' '}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          {data.results.map((entity, index) => {
            return (
              <div key={index} className={styles.card}>
                <a href={entity.url} target='_blank' rel="noreferrer">
                  <h2>{entity.name}</h2>
                  <p>{entity.model}</p>
                </a>
              </div>
            )
          })}
          {/* <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
