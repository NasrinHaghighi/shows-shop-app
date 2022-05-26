import React from 'react'
import Image from 'next/image'

import styles from './Analize.module.css'

import Note from '../../public/images/Group 732.png'

function Analize({...singleProduct}) {
    const {model, name}= singleProduct
    return (
     
            <div className={styles.main}>
           <div className={styles.conatiner}>
           <h3 className={styles.head}> <Image src={Note}/> <span>نقد و بررسی </span></h3>
           <p className={styles.name}>{name} مدل {model}</p>
           </div>
  
  
           <div className={styles.conatiner2}>
              <p>موردی برای نمایش وجود ندارد .</p>
           </div>
  
  
           </div> 
     
    )
}

export default Analize