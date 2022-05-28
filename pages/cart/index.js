import React from 'react'
import styles from './indexCart.module.css'
import Image from 'next/image'
import Link from 'next/link'
import arrowback from '../../public/images/Group 974.png'
import {useSelector} from 'react-redux'
import CartItem from '../../components/Cart/CartItem'

function index() {
  let cart= useSelector((state)=> state.cart)
    cart =cart.cart

  return (
    <div className={styles.container}>
        <div className={styles.header}>
           <p>سبد خرید</p>
           <span><Link href="/products"><a><Image src={arrowback}/></a></Link></span>
        </div>
        <div  className={styles.main}>
          <div className={styles.cartItem}>
         {cart.length <1 
         ? 
        <p>سبد خرید خالی است. </p>
          :
           cart.map((item)=>{
            return <CartItem key={item.id} {...item}/>
          })}
           
          </div>
          <div className={styles.cartcalcu}>
            gg
          </div>
        </div>
       
    </div>
  )
}

export default index