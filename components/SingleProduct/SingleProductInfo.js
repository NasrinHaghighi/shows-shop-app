import React, {useState} from 'react'
import Link from 'next/link'
import Amount from './Amount'
import ColorPart from './ColorPart'
import Favorite from './Favorite'
import styles from './SingleProductInfo.module.css'
import{ addItem} from '../../feactures/cartSlice'

import SizePart from './SizePart'
import { useDispatch } from 'react-redux'

function SingleProductInfo({...singleProduct}) {
      const{name, id,model, ShortDescription, price, sizes,colors ,images ,discont} =singleProduct

      const dispatch=useDispatch()


      ///set color as user select
      const [mainColor, setMainColor]= useState(colors[0])
      const selectColor=(color)=>{
          setMainColor(color)
      }

 ///set size as user select
      const [mainSize, setMainSize] = useState(sizes[0])

      const changeSize=(size)=>{
        setMainSize(size)
      }
      //set amount as user select 
      const [mainAmount, setAmount] =useState(1)
      const increment = () => {
        if(mainAmount>=10){
          mainAmount=10
         
        }else {
         setAmount(mainAmount + 1)
        }
      
      }
      const decrement = () => {
        if(mainAmount<=1){
          mainAmount=1
          
        }else{
        setAmount(mainAmount -1)}
      }
    

const handelAddItem=()=>{
dispatch(addItem({id, mainSize, mainColor, mainAmount , price, name, ShortDescription, model ,images, discont}))
}
    
const finalPrice=price-(price*discont)/100
 
  return (
    <div className={styles.singleProductInfo}>
             <h1 className={styles.header}>{name} مدل {model} </h1>

             <p className={styles.p}>{name} مدل {model} {ShortDescription}</p>
             <div className={styles.priceConatiner}>
             <div className={discont>0 ?   styles.priceWithDiscont: styles.price}> قیمت :{price} تومان</div>
             {discont ?  <div className={styles.discont}> قیمت :{finalPrice} تومان</div> :'' }
             
             </div>
             <SizePart sizes={sizes} changeSize={changeSize} mainSize={mainSize}/>
             <ColorPart colors={colors} selectColor={selectColor} mainColor={mainColor}/>
            <Amount increment={increment} decrement={decrement} mainAmount={mainAmount}/>

            <button className={styles.addtoCart} onClick={handelAddItem}> <Link href='/cart'><a>افزودن به سبد خرید</a></Link></button>
            <Favorite />
    </div>
  )
}

export default SingleProductInfo

