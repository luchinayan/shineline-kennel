import React from 'react'
import styles from '../styles/HighlightedTitle.module.css'

const HighlightedTitle = (props) => {
  const {title, highlighted, endText} = props
  return (
    <div className={styles.highlightedTextContainer}>
      <div>{title}
        <div className={styles.highlightedText}>{highlighted}</div>
        {endText ? endText : null}</div>
      <hr className={styles.hrLine}/>
    </div>
  )
}

export default HighlightedTitle
