import React from 'react'
import styles from '../styles/Litters.module.css'
import useTranslation from "next-translate/useTranslation"

const Litters = (props) => {
  const {allData} = props

  const {lang} = useTranslation()

  function zoomIn(ev) {
    window.open(ev.target.src, '_blank').focus()
  }

  return (
    <div className={styles.littersContainer}>
      {allData.map((data) => {
        return (
          <div onClick={zoomIn} className={styles.litter} key={data.source}>
            <img className={styles.litterImg}
              src={data.source} alt={data.info.dog_name}/>
            <p className={styles.littersText}>{lang === 'ru' ? data.info.textru : data.info.texten}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Litters
