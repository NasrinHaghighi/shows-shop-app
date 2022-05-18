import React from 'react'
import styles from './Feature.module.css'
import Image from 'next/image'
import pardakht from '../../public/images/Group 940.png'
import ersal from '../../public/images/Group 947.png'
import asan from '../../public/images/Group 952.png'
import ToTop from './ToTop'

function Feature() {
  return (
    <div className={styles.feature}>
        <div className={styles.icons}>
     <div className={styles.box}><Image src={ersal}/> <span>ارسال رایگان</span></div>
      <div className={styles.box1}><Image src={pardakht}/> <span>پرداخت سریع</span></div>
  
    <div className={styles.box}><Image src={asan}/> <span>خرید آسان</span></div>

    </div>


    <div className={styles.half}> <ToTop/> </div>

    </div>
  )
}

export default Feature