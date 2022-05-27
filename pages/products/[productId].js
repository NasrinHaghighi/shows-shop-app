import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import { useSelector } from 'react-redux'
import styles from './ProductId.module.css'
import ProductImage from '../../components/SingleProduct/ProductImage'
import SingleProductInfo from '../../components/SingleProduct/SingleProductInfo'
import TabsPart from '../../components/Taps/TabsPart'

import Product from '../../components/Product/Product'
import UpFooter from '../../components/Footer/UpFooter'

function SingleProductPage() {
  const router =useRouter()
  const productId = router.query.productId
    //console.log(productId)

    
    let products=useSelector((state=>state.products))
    let p = products.products
    //console.log(p)
   const singleProduct = p.find(item => item.id == productId)
   console.log(singleProduct)
  
  return (
    <>
    <div className={styles.ProductSinglePageContainer}>
  <div className={styles.singlepageBanner}>
     <div><SingleProductInfo {...singleProduct}/></div>
     <div><ProductImage {...singleProduct}/></div> 
   
    </div>
    <TabsPart {...singleProduct}/>
    </div>
    
    <div className={styles.relevent}>
      <div className={styles.title}>
      <span className={styles.link}><Link href="/products"><a>مشاهده همه</a></Link></span> 
      <span className={styles.titleText}>محصولات مرتبط</span>
      </div>
    <div className={styles.productsContainer}>
     
  {p.slice(0,4).map((i)=>{
  return <Product key={i.id} {...i}/>
          })}
      </div>
      </div>
      <UpFooter />
    </>
  )
}

export default SingleProductPage