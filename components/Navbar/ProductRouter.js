import React from 'react'
import arrow from '../../public/images/Path 861.png'
import Image from 'next/image'
import styles from './ProductRouter.module.css'
function ProductRouter() {
  return (
    <div className={styles.productRouter}><span>محصولات</span><span className={styles.arrow}><Image src={arrow}/></span></div>
  )
}

export default ProductRouter