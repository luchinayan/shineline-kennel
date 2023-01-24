import React from 'react'
import styles from '../styles/KennelHistory.module.css'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import {ThemeProvider} from "@mui/system"
import {theme} from '../themes/theme'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TabPanel from '@mui/lab/TabPanel'
import HighlightedTitle from "./HighlightedTitle"
import useTranslation from "next-translate/useTranslation"

const KennelHistory = (props) => {
  const {dataMainPageCarousel} = props
  const {t} = useTranslation('index')
  const [value, setValue] = React.useState('2015')

  const kennelHistoryInfo = [
    {year: '2015', info: `${t('KH-info2015')}`},
    {year: '2016', info: `${t('KH-info2016')}`},
    {year: '2018', info: `${t('KH-info2018')}`}
  ]

  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className={styles.kennelHistoryContainer}>
      <div className={styles.textContainer}>
        <HighlightedTitle title={t('KH-highlightedTitle')}
          highlighted={t('KH-highlighted')}/>
        <ThemeProvider theme={theme}>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange}>
                <Tab label={'2015'} value={'2015'}/>
                <Tab label={'2016'} value={'2016'}/>
                <Tab label={'2018'} value={'2018'}/>
              </TabList>
            </Box>
          </TabContext>
          {
            kennelHistoryInfo.map((val) => {
              return (
                <TabContext key={val.year} value={value}>
                  <TabPanel className={styles.kennelHistoryInfo}
                    value={val.year}>{val.info}</TabPanel>
                </TabContext>
              )
            })
          }
        </ThemeProvider>
      </div>
      <div className={styles.carouselContainer}>
        <Slider {...sliderSettings}>
          {dataMainPageCarousel.map((el) => {
            return (
              <div key={el.id}>
                <img className={styles.carouselImg} alt={el.id} src={el.source}/>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default KennelHistory
