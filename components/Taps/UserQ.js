import React from 'react'

import Image from 'next/image'
import styles from './UserQ.module.css'
import questionMark from '../../public/images/Group 968.png'


function UserQ({...singleProduct}) {
    const {model, name}= singleProduct
  return (
   
          <div className={styles.main}>
         <div className={styles.conatiner}>
         <h3 className={styles.head}> <Image src={questionMark}/> <span>سوالات کاربران </span></h3>
         <p className={styles.name}>{name} مدل {model}</p>
         </div>


         <div className={styles.conatiner2}>
            
             <p>برای ثبت پرسش، لازم است ابتدا وارد حساب کاربری خود شوید</p>
         </div>


         </div> 
   
  )
}

export default UserQ