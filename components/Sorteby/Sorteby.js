import React, {useState} from 'react'
import styles from './Sorteby.module.css'
import {sortProductsHandler} from '../../feactures/allProductsSlice'
import { useDispatch } from 'react-redux';

const data = [  
    {  
      id: 1,  
       type: "پر بازدیدترین ها",  
       value:'mostVisited'
    },  
    {  
      id: 2,     
      type: "پرفروش ترین ها ", 
      value:'bestSeller'

    },  
    {  
      id: 3,  
       type: "محبوب ترین ها",  
       value:'mostPopular'
    },  
    {  
      id: 4,     
      type: "جدید ترین", 
      value:'newest' 
    },  
    {  
      id: 5,     
      type: "گران ترین", 
      value:'mostExpensive' 
    }, 
    {  
      id: 6,     
      type: "ارزان ترین", 
      value:'mostCheapest' 
    }, 
     ];  

function Sorteby() {
    const [activeLi, setActiveLi] =useState(1)

    const dispatch= useDispatch()
  return (
    <div className={styles.sortby}>
        <span className={styles.sortBtn}> مرتب سازی بر اساس :</span>
        <ul className={styles.sorteUl}>
        {data.map((item)=>{
            return <li key={item.id} value={item.value}
             onClick={()=>{setActiveLi(item.id);dispatch(sortProductsHandler(item.value))}}
             className={activeLi === item.id ? styles.active:styles.sorteItem }>
                {item.type}
                </li>
        })}

        </ul>
    </div>
  )
}

export default Sorteby