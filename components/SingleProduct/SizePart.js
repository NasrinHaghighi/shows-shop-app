import React, {useState} from 'react'
import styles from './SizePart.module.css'

function SizePart({sizes, changeSize, mainSize}) {
    //console.log(sizes)
 
  return (
    <div className={styles.conatiner}>
<span className={styles.title}>انتخاب سایز :</span>
{sizes.slice(0).reverse().map((size, index)=>{
    return <span key={index}
     className={mainSize === size? styles.ActiveSize : styles.size}
     onClick={()=>changeSize(size)}
     
     >{size}</span>
})}
    </div>
  )
}

export default SizePart