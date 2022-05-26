import React from 'react'
import styles from './Description.module.css'

function Description({...singleProduct}) {
    const {description} =singleProduct
  return (
    <div>
        <p className={styles.p}>{description}</p>


    </div>
  )
}

export default Description