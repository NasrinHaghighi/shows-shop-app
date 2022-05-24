import React,{useState} from 'react'
import styles from './Amount.module.css'

const Amount=({mainAmount,increment,decrement})=> {

   


  return (
    <div className={styles.container}> 
     <span>   تعداد  :</span>
       <div className={styles.content}>
            <button onClick={increment}>+</button>
                <span> {mainAmount} </span>
            <button onClick={decrement}>-</button>
          
            </div>
       
    </div>
  )
}

export default Amount


// const incriminate=(a)=>{
//     setAmount(a+1)
//     }
//     const decriminate=(a)=>{
//         setAmount(a-1)
//         }