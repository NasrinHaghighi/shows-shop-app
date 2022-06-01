import React from 'react'
import styles from './CartCalcu.module.css'
import{ flagChange} from '../../feactures/flagSlice'

import {useSelector, useDispatch} from 'react-redux'


function CartCalcu() {

  const dispatch=useDispatch()
   let  cart =useSelector((state=> state.cart))
   cart=cart.cart

  let login=useSelector((state=> state.login))
  login=login.login
  //console.log(login) true
  ///recive falge from store//
  let  flag =useSelector((state=> state.flag))
  flag=flag.flag

 
   const handelchange=()=>{
     dispatch(flagChange(flag))
       }

    ///
    const { total_price, total_discont ,total_amount, total_maliat} = cart.reduce((total, cartItem) => {
        //console.log(cartItem)
        const { price, amount , discont} = cartItem
        //console.log(discont)
        total.total_price += price * amount
      total.total_discont +=(price*amount*discont)/100
      total.total_amount +=amount
      total.total_maliat += (price * amount)*23/100
        return total
    }, {
        total_price: 0,
        total_discont:0,
        total_amount:0,
        total_maliat:0,
    })
    //console.log(total_price,  total_discont, total_amount, total_maliat)
///////////////////////////////
   const length=cart.length
///////////////////////////
const finalPrice=( total_price-total_discont)+total_maliat




  return (
    <div className={styles.conatiner}>
<div className={styles.calcu}>
    <div className={styles.totalPrice}><span>قیمت محصولات ({length}) </span><span>{total_price} تومان</span></div>
    <div className={styles.totalDiscont}><span>تخفیف محصولات </span><span>{total_discont} تومان</span></div>
    <div className={styles.maliat}><span> مالیات بر ارزش افزوده  </span><span> {total_maliat}تومان</span></div>
</div>
<div className={styles.final}>
    <div className={styles.finalBtn}>
    <button className={styles.code}> کد تخفیف</button><button className={styles.applyCode}>اعمال</button>
    </div>
    <div className={styles.finalPrice}> مبلغ نهایی :<span>{finalPrice} تومان</span></div>
    <button className={styles.continue} onClick={handelchange}>{flag ? 'پرداخت' : 'ادامه فرایند خرید'} </button>
</div>
    </div>
  )
}

export default CartCalcu