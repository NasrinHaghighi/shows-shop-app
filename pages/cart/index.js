import React from 'react'
import styles from './indexCart.module.css'
import Image from 'next/image'
import Link from 'next/link'
import arrowback from '../../public/images/Group 974.png'
import {useSelector} from 'react-redux'
import CartItem from '../../components/Cart/CartItem'
import CartCalcu from '../../components/Cart/CartCalcu'
import CartItemsList from '../../components/Cart/CartItemsList'
import RegisterForm from '../../components/Cart/RegisterForm'
import CartCountinue from '../../components/Cart/CartCountinue'

function index() {
  let cart= useSelector((state)=> state.cart)
    cart =cart.cart

///get two variable to make condition//
    let  flag =useSelector((state=> state.flag))
    flag=flag.flag

    let  login =useSelector((state=> state.login))
    login=login.login

  return (
    <div className={styles.container}>
     
        
        
        <div className={styles.header}>
           <p>سبد خرید</p>
           <span><Link href="/products"><a><Image src={arrowback}/></a></Link></span>
        </div>
        <div  className={styles.main}>
        {/* conditional situation for form/cartitem list/countinue to pay */}
       
  
   { !flag && !login || !flag && login
      ? <CartItemsList />
      : ( flag && !login
        ? <RegisterForm /> : <CartCountinue />
        // : ( condition3
        //   ? <Component3 />
        //   : <Component 4 />
        // )
      )
    }

          {/* <CartItemsList /> */}
     


         {/* conditional situation for form/cartitem list/countinue to pay */}   
          <div className={styles.cartcalcu}>
           <CartCalcu />
          </div>
        </div>
       
    </div>
  )
}

export default index