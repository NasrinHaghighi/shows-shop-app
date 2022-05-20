import React ,{useEffect}from 'react'
import styles from './ProductsPage.module.css'
import Navabr from '../../components/Navbar/Navbar'
import Sorteby from '../../components/Sorteby/Sorteby'
import Filterby from '../../components/Filterby/Filterby'
import Product from '../../components/Product/Product'

import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../feactures/allProductsSlice'
import { products } from '../../services/productsList'
import Pagination from '../../components/Pagination/Pagination'



//all products***//
//import{ products }from '../../services/productsList'

function ProductsPage() {
  const dispatch=useDispatch()
  let products=useSelector((state=>state.products))
 let p=products.products
 //console.log(p)

 useEffect(() => {
  dispatch(getAllProducts())
}, [])
 
  
  return (

   <div className={styles.productPage}>
          <Sorteby />
   <div className={styles.mainPage}> 
    <Filterby /> 
    <div className={styles.productsContainer}>
{p.map((i)=>{
  return <Product key={i.id} {...i}/>
})}
</div>
    </div>
    <Pagination />
  </div>

  )
}

export default ProductsPage

//<div className={styles.productsContainer}>


//</div>