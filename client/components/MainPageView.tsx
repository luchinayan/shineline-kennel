import React from 'react'
import styles from '../styles/MainPageView.module.css'
import HighlightedTitle from "./HighlightedTitle"
import useTranslation from "next-translate/useTranslation"

const MainPageView = (props) => {
  let {t} = useTranslation('index')

  const {dataMainPageTitles} = props
  const ImgSource = dataMainPageTitles.find(el => el.id === 58).source
  return (
    <div className={styles.mainViewContainer}>
      <div className={styles.mainView}>
        <img src={ImgSource}
          alt='spanielMain'
        />
      </div>
      <div className={styles.textContainer}>
        <HighlightedTitle title={t('MPV-highlightedTitle')}
          highlighted={t('MPV-highlighted')}
          endText={t('MPV-highlightedEndText')}/>
        <div className={styles.mainPageText}>{t('MPV-info')}</div>
      </div>
    </div>
  )
}

export default MainPageView
