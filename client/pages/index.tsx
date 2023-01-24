import React, {useRef} from 'react'
import MainPageView from "../components/MainPageView"
import DogsInfo from "../components/DogsInfo"
import KennelHistory from "../components/KennelHistory"
import CircleIcon from '@mui/icons-material/Circle'
import styles from '../styles/Index.module.css'

const Index = ({dataMainPageTitles, dataMainPageCarousel}) => {
    const MainPageRef = useRef<null | HTMLDivElement>()
    const DogsInfoRef = useRef<null | HTMLDivElement>()
    const KennelHistoryRef = useRef<null | HTMLDivElement>()

    function handleBackClick(ev) {
        ev.currentTarget.id === '1' ? MainPageRef.current.scrollIntoView({behavior: 'smooth'}) :
            ev.currentTarget.id === '2' ? DogsInfoRef.current.scrollIntoView({behavior: 'smooth'}) :
                ev.currentTarget.id === '3' ? KennelHistoryRef.current.scrollIntoView({behavior: 'smooth'}) :
                    null
    }


    return (
        <div>
            <div className={styles.pageNavigation}>
                <div tabIndex={0} onClick={handleBackClick} className={styles.pageNavigationDots} id={'1'}><CircleIcon
                    fontSize={'small'}/></div>
                <div tabIndex={0} onClick={handleBackClick} className={styles.pageNavigationDots} id={'2'}><CircleIcon
                    fontSize={'small'}/></div>
                <div tabIndex={0} onClick={handleBackClick} className={styles.pageNavigationDots} id={'3'}><CircleIcon
                    fontSize={'small'}/></div>
            </div>
            <div ref={MainPageRef}><MainPageView dataMainPageTitles={dataMainPageTitles}/></div>
            <div ref={DogsInfoRef}><DogsInfo dataMainPageTitles={dataMainPageTitles}/></div>
            <div ref={KennelHistoryRef}><KennelHistory dataMainPageCarousel={dataMainPageCarousel}/></div>
        </div>
    )
}

export async function getServerSideProps() {
    const resMainPageTitles = await fetch(`${process.env.REACT_APP_API_URL}/api/image?type=MainPageTitles`)
    const resMainPageCarousel = await fetch(`${process.env.REACT_APP_API_URL}/api/image?type=MainPageCarousel`)
    const dataMainPageTitles = await resMainPageTitles.json()
    const dataMainPageCarousel = await resMainPageCarousel.json()
    return {props: {dataMainPageTitles, dataMainPageCarousel}}
}


export default Index
