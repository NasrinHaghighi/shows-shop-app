import React from 'react'
import styles from './BannerFooter.module.css'
import Image from 'next/image'
import chat from '../../public/images/Rectangle 752.png'
import object from '../../public/images/Group 926.png'
import whatsApp from '../../public/images/Path 932.png'
import insata from '../../public/images/Group 919.png'


function BannerFooter() {
  return (
    <div className={styles.bannerFooter}>
        <div className={styles.icons}>
        <Image src={whatsApp}/>
        <Image src={insata}/>
        </div>
      
       <div className={styles.obj}><Image src={object} /> </div>
       <div className={styles.chat}><Image src={chat}/></div>
        
    </div>
  )
}

export default BannerFooter