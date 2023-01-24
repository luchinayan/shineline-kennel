import React from 'react'
import styles from '../styles/Contacts.module.css'
import Map from './Map'
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

const Contacts = () => {
  const {t} = useTranslation('contacts')
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsTitle}>{t('CN-contacts')}</div>
      <div className={styles.map}><Map/></div>
      <div className={styles.contacts}>
        <div className={styles.contactsItem}>
          <Link href={'https://www.facebook.com/'}>facebook</Link>
        </div>
        <div className={styles.contactsItem}>
          <Link href={'https://www.instagram.com/'}>instagram</Link>
        </div>
        <div className={styles.contactsItem}>
          <Link href={'https://t.me/luchinayan'}>telegram</Link>
        </div>
        <div className={styles.contactsItem}>
          <Link href={'mailto:yanluchina48@gmail.com'}>gmail</Link>
        </div>
      </div>
    </div>
  )
}

export default Contacts
