import React from 'react'
import Image from 'next/image'
import t from '../../public/images/Group 965.png'
import styles from './ToTop.module.css'

function ToTop() {
    const scrollTotop=()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
          });
    }
  return (
    <div className={styles.totop} onClick={scrollTotop}>
        <Image src={t}/>
    </div>
  )
}

export default ToTop