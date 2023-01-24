import React from 'react'
import styles from '../styles/DogInfo.module.css'
import HighlightedTitle from "./HighlightedTitle"
import useTranslation from "next-translate/useTranslation"


const DogsInfo = (props) => {
  let {t} = useTranslation('index')
  const {dataMainPageTitles} = props
  const imgSource = dataMainPageTitles.find(el => el.id === 60).source
  return (
    <div className={styles.sectionDogInfoContainer}>
      <div className={styles.sectionDogInfoText}>
        <HighlightedTitle title={t('DI-highlightedTitle')} highlighted={t('DI-highlighted')}
          endText={t('DI-highlightedEndText')}/>
        <div className={styles.dogInfoText}>{t('DI-info')}</div>
      </div>
      <div className={styles.cavalierImgContainer}>
        <img className={styles.cavalierImg} src={imgSource}
          alt={'cavalier'}/>
      </div>

    </div>
  )
}

export default DogsInfo
