import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from "next/link"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Link href={'/'}>
        <span className={styles.footerContainerShineLine}>SHINELINE 2022</span>
      </Link>
      <div className={styles.footerLinksContainer}>
        <Link href={'https://www.instagram.com/'}>INSTAGRAM</Link>
        <Link href={'https://www.facebook.com/'}>FACEBOOK</Link>
        <Link href={'https://t.me/luchinayan'}>TELEGRAM</Link>
      </div>
    </div>
  )
}

export default Footer
