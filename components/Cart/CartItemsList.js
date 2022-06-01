import React from 'react'
import styles from './CartItemsList.module.css'
import CartItem from './CartItem'
import {useSelector} from 'react-redux'

function CartItemsList() {

    let cart= useSelector((state)=> state.cart)
    cart =cart.cart
  return (
    <div className={styles.conatiner}>
        
           <div className={styles.cartItem}>
         {cart.length <1 
         ? 
        <p>سبد خرید خالی است. </p>
          :
           cart.map((item)=>{
            return <CartItem key={item.id} {...item}/>
          })}
           
          </div>
    </div>
  )
}

export default CartItemsList