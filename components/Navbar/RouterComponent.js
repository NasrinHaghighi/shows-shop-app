import { useRouter } from 'next/router'
import React from 'react'
import styles from './RouterComponent.module.css'
import arrow from '../../public/images/Path 861.png'
import Image from 'next/image'
import ProductRouter from './ProductRouter'
import Link from 'next/link'

function RouterComponent() {
    const router=useRouter()
    const pathname=router.pathname
    let flage;
    if(pathname === '/products'){
        flage = true
    }
  return (
    <div className={styles.router}>
       {flage ? <ProductRouter /> : ''}
          <span className={styles.firstpath}>کالای وان دسک </span>
        <span className={styles.arrow}><Image src={arrow}/> </span>
        <span className={styles.firstpath}> <Link href='/'>  فروشگاه اینترنتی وان دسک </Link>
       
        </span>
        </div>
  )
}

export default RouterComponent