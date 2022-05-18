import React from 'react'
import styles from './ProductsPage.module.css'
import Navabr from '../../components/Navbar/Navbar'
import Sorteby from '../../components/Sorteby/Sorteby'
import Filterby from '../../components/Filterby/Filterby'
import Product from '../../components/Product/Product'


//all products***//
import{ products }from '../../services/productsList'

function ProductsPage() {
  return (
  <div >
<Navabr />
<div className={styles.productPage}>
 <Sorteby />
 <div className={styles.mainPage}>
  <Filterby />
  <div className={styles.productsContainer}>
    {products.map((item)=>{
      return <Product key={item.id} {...item}/>
    })}
  
  </div>
 </div>
</div>
    </div>
  )
}

export default ProductsPage