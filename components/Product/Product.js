import React from 'react'
import styles from './Product.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Stars from '../Stars/Stars'


const Product=({...item})=> {
 const images=item.images
console.log(item)
  return (
    <div className={styles.product}>
     <div className={styles.title}>       <span>{item.name}</span>       <div><Stars stars={item.stars}/></div>       </div>

         <div className={styles.img}>     <img src={images[0].src}/>       </div>
        <div className={styles.end}>
          <div className={styles.link}><Link href={`/products/${item.id}`}><a> مشاهده محصول</a></Link></div>
          <div className={styles.price}>{item.price} تومان</div>
        </div>
    </div>
  )
}

export default Product