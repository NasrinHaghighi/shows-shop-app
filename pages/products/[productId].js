import React from 'react'
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux'
import styles from './ProductId.module.css'
import ProductImage from '../../components/SingleProduct/ProductImage'
import SingleProductInfo from '../../components/SingleProduct/SingleProductInfo'
import TabsPart from '../../components/Taps/TabsPart'

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
    <div className={styles.ProductSinglePageContainer}>
  <div className={styles.singlepageBanner}>
     <div><SingleProductInfo {...singleProduct}/></div>
     <div><ProductImage {...singleProduct}/></div> 
   
    </div>
    <TabsPart {...singleProduct}/>
    </div>
  )
}

export default SingleProductPage