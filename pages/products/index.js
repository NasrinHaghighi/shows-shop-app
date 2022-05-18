import React from 'react'
import styles from './ProductsPage.module.css'
import Navabr from '../../components/Navbar/Navbar'
import Sorteby from '../../components/Sorteby/Sorteby'
import Filterby from '../../components/Filterby/Filterby'

function ProductsPage() {
  return (
  <div >
<Navabr />
<div className={styles.productPage}>
 <Sorteby />
 <div className={styles.mainPage}>
  <Filterby />
   <div>444</div>
 </div>
</div>
    </div>
  )
}

export default ProductsPage