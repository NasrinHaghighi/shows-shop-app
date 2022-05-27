import React from 'react'
import styles from './Upfooter.module.css'
import location from '../../public/images/Group 969.png'
import zemanat from '../../public/images/Group 970.png'
import tahvil from '../../public/images/Group 972.png'
import poshtibani from '../../public/images/Group 971.png'

import Image from 'next/image'



function UpFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.i1 }>  <Image src={location}/>    <span>ارسال به تمام نقاط</span> </div>
      <div className={styles.i1}>  <Image src={zemanat}/>    <span>ضمانت بازگشت</span> </div>
      <div className={styles.i1}>  <Image src={tahvil}/>    <span>پشتیبانی آنلاین</span> </div>
      <div className={styles.i1}>  <Image src={poshtibani}/>    <span>تحویل فوری</span> </div>
    </div>
  )
}

export default UpFooter