import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import mail from '../../public/images/Path 82.png'
import tel from '../../public/images/Group 128.png'

function Footer() {
  return (
    <div className={styles.footer}>
      
       
       <div className={styles.second}>
         <div>
           <Image src={mail}/>
           <span>Info@imenaria.org</span>
         </div>
         <div>
         <Image src={tel}/>
         <span>09999901231</span>
         </div>
       </div>
       <div className={styles.first}>
         <p>آدرس: پونک،خیابان فلاح زاده، کوچه 12، پلاک 12</p>
         <p>021-44476064 :شماره تماس</p>
       </div>
        </div>
  )
}

export default Footer