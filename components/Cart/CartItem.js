import React from 'react'
import Image from 'next/image'
import styles from './CartItem.module.css'
import trash from '../../public/images/Group 690.png'
import {deleteItem }from '../../feactures/cartSlice'
import {useDispatch} from 'react-redux'


function CartItem({...item}) {
  
    const{images,name, model, ShortDescription,price,discont,amount, size,color, newId} =item
   

    const dispatch=useDispatch()

    const handelDelet=()=>{
       dispatch(deleteItem(newId))
       
    }
  return (
    <div className={styles.CartItemConatiner}>
        <div className={styles.CartItemImage}>
           <img src={images[0].src}/>
        </div>
        <div className={styles.CartItemInfo}>
        <h1 className={styles.header}>{name} مدل {model} </h1>

       <p className={styles.p}>{name} مدل {model} {ShortDescription}</p>
         <div className={styles.price}> قیمت :{price} تومان</div>
         <div className={styles.size}> سایز: <span> {size} </span> </div>
         <div className={styles.color}>  رنگ: <div className={styles.circle} style={{background:color}}></div></div>
         <div className={styles.amount}> تعداد: <span> {amount} </span> </div>
        </div>
        <div className={styles.trash} onClick={handelDelet}><Image className={styles.img} src={trash}/></div>
    </div>
  )
}

export default CartItem