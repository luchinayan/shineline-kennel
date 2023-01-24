import React, {useState} from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import HomeIcon from '@mui/icons-material/Home'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PetsIcon from '@mui/icons-material/Pets'
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import useTranslation from "next-translate/useTranslation"

const AboutUs = (props) => {
  const {dataAboutUs} = props
  const {t} = useTranslation('about')
  const [isCounterOn, setCounterOn] = useState(false)
  return (
    <div>
      <div className={styles.aboutUsTextContainer}>
        <div className={styles.aboutUsEssay}>
          {t('AU-essay')}
        </div>
        <div className={styles.aboutUsAwards}>
          {t('AU-awards')}
        </div>
      </div>
      <div className={styles.statisticContainer}>
        <div className={styles.imageDogs}>
          {dataAboutUs.map(el => <Image src={el.source} width={600} height={350} key={el.id} alt={'dogs'}
            style={{borderRadius: '1rem'}}/>)}
        </div>
        <div className={styles.statisticText}>
          <div>
            {t('AU-mission')}
          </div>
          <hr className={styles.hrLine}/>
          {/*@ts-ignore*/}
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className={styles.statisticInfo}>
              <div className={styles.statisticIconContainer}>
                <HomeIcon style={{fontSize: '3rem'}}/>
                <div className={styles.countUp}><CountUp
                  start={isCounterOn ? 0 : null}
                  end={13} delay={0}
                  duration={1.5}/></div>
                <p>{t('AU-successStories')}</p>
              </div>
              <div className={styles.statisticIconContainer}>
                <EmojiEventsIcon style={{fontSize: '3rem'}}/>
                <div className={styles.countUp}><CountUp start={isCounterOn ? 0 : null} end={33}
                  delay={0}
                  duration={1.5}/></div>
                <p>{t('AU-receivedAwards')}</p>
              </div>
              <div className={styles.statisticIconContainer}>
                <PetsIcon style={{fontSize: '3rem'}}/>
                <div className={styles.countUp}><CountUp start={isCounterOn ? 0 : null} end={3}
                  delay={0}
                  duration={1.5}/></div>
                <p>{t('AU-availablePuppies')}</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
