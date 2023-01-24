import React from 'react'
import Link from "next/link"
import styles from '../styles/404.module.css'

const Error404 = () => {
  return (
    <div className={styles.page404Container}>
      <div className={styles.whoops}>WHOOPS!</div>
      <div className={styles.page404Description}>404 page not found</div>
      <div className={styles.page404Text}>Looks like this page went on vacation</div>
      <div className={styles.suggestion}>
                Try our <Link className={styles.suggestionLink} href={'/'}>homepage</Link>
      </div>
    </div>
  )
}

export default Error404
