import React from 'react'
import styles from './Banner.module.css'
import show from '../../public/images/Group 921.png'
import Image from 'next/image'


function Banner() {
  return (
    <>
       <div className={styles.banner}>
     <div className={styles.mainBanner}>
<div className={styles.bannerLeft}>
        <div><h1>هزاران مدل کفش</h1></div>
        <h3>در فروشگاه  <span>وان دسک</span></h3>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
</div>
<div className={styles.bannerRight}>
       <Image src={show}/>
</div>

        </div>
       
        </div>
    
        </>   

 
  )
}

export default Banner