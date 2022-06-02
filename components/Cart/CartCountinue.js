import React from 'react'
import styles from './CartCountinue.module.css'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../../public/images/Path 475.png'
import clock from '../../public/images/Group 563.png'
import {useSelector} from 'react-redux'

function CartCountinue() {
    let cart=useSelector(state=>state.cart)
    cart=cart.cart
  return (
    <div className={styles.cartContinue}>
           <div className={styles.address}>
          <div>
            <p>آدرس تحویل سفارش</p>
            <p>پونک، خیابان فلاح زاده، خیابان همیلا، پلاک 2</p>
          </div>
           
            <div className={styles.cahngeAddress}>
            <Link href="/"><a>تغییر یا ویرایش آدرس <span><Image src={arrow}/></span></a></Link>
        
            </div>
        </div>
       
        <div className={styles.info}>
            <div className={styles.cartItems}>
             {cart.map((item)=>{
                return(<div className={styles.cartItem}><div className={styles.cartItemImg}><img src={item.images[0].src}/></div><p>{item.name}{item.model}</p></div>)
                  })}
             </div>
          <div className={styles.table}>
            <div className={styles.header}> <Image src={clock}/><span>انتخاب زمان ارسال </span></div>
          
            <table className={styles.mainTable}>
  
               <tr className={styles.row}>
                  <td className={styles.cell}>شنبه</td>
                 <td className={styles.cell}>25آذر</td>
                 <td className={styles.cell}>از ساعت 9 الی 13</td>
                 <td className={styles.cell}>از ساعت 13 الی 15</td>
                 <td className={styles.cell}>از ساعت 17 الی 22</td>
              </tr>
              <tr className={styles.row}>
                  <td className={styles.cell}>شنبه</td>
                 <td className={styles.cell}>25آذر</td>
                 <td className={styles.cell}>از ساعت 9 الی 13</td>
                 <td className={styles.cell}>از ساعت 13 الی 15</td>
                 <td className={styles.cell}>از ساعت 17 الی 22</td>
              </tr>
              <tr className={styles.row}>
                  <td className={styles.cell}>شنبه</td>
                 <td className={styles.cell}>25آذر</td>
                 <td className={styles.cell}>از ساعت 9 الی 13</td>
                 <td className={styles.cell}>از ساعت 13 الی 15</td>
                 <td className={styles.cell}>از ساعت 17 الی 22</td>
              </tr>
              <tr className={styles.row}>
                  <td className={styles.cell}>شنبه</td>
                 <td className={styles.cell}>25آذر</td>
                 <td className={styles.cell}>از ساعت 9 الی 13</td>
                 <td className={styles.cell}>از ساعت 13 الی 15</td>
                 <td className={styles.cell}>از ساعت 17 الی 22</td>
              </tr>
            </table>
          </div>

        </div>
    </div>
  )
}

export default CartCountinue