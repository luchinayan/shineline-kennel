import React from 'react'
import ymaps from 'ymaps'
import styles from '../styles/Contacts.module.css'

// eslint-disable-next-line react/display-name
const Map = React.memo(() => {
  ymaps
    .load()
    .then(maps => {
      const map = new maps.Map('map', {
        center: [54.183795, 27.256215],
        zoom: 13
      })
      map.setType('yandex#map')
      let placeMark = new maps.Placemark([54.183795, 27.256215])
      map.geoObjects.add(placeMark)

    })
    .catch(error => console.log('Failed to load Yandex Maps', error))

  return (
    <div className={styles.mapContainer}>
      <div id={'map'} style={{width: '100%', height: '100%'}}/>
    </div>
  )
})

export default Map
