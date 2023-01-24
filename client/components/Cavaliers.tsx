import React from 'react'
import styles from '../styles/Cavaliers.module.css'

import {Button} from "@mui/material"
import useTranslation from "next-translate/useTranslation"

const Cavaliers = (props) => {
  const {allData} = props

  const {t, lang} = useTranslation('cavaliers')


  return (
    <div className={styles.cavaliersContainer}>
      {allData.map((dog) => {
        return (
          <div key={dog.id} className={styles.cavalierImgContainer}>
            <img className={styles.cavalierImg} src={dog.source}
              alt={dog.type}/>
            <p>{dog.info.dog_name}</p>
            <p>{lang === 'ru' ? dog.info.textru : dog.info.texten}</p>
            <Button variant='outlined'
              className={styles.btn}
            >{t('CV-btnPedigree')}</Button>
          </div>
        )
      })}
    </div>
  )
}

export default Cavaliers
