import React from 'react'
import styles from '../page.module.css'

const Card = ({entity}) => {
  return (
    <div className={styles.card}>
      <a href={entity.url} target='_blank' rel="noreferrer">
        <h2>{entity.name}</h2>
        <p>{entity.model}</p>
      </a>
    </div>
  )
}

export default Card