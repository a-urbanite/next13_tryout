import React from 'react'
import Card from '../(components)/Card';
import styles from "../page.module.css";

const page = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  const data = await res.json();

  return (
    <div>
      <h1>people!</h1>
      <div className={styles.grid}>
        {data.results.map((entity, index) => <Card key={index} entity={entity}/> )}
      </div>
      <a href="/"><button >back</button></a>
    </div>
  )
}

export default page