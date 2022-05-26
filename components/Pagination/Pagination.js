
import React, {useState} from 'react'
import Image from 'next/image'

import styles from './Pagination.module.css'
import ToTop from './Totop'


import arrowBlack from '../../public/images/Path 781.png'
import arrowGray from '../../public/images/Path 861.png'

//temporary solution for call the api//
const pages=[{page:1}, {page:2}, {page:3}, {page:4}, {page:5}]

const Pagination=()=> {
    const [page, setPage] =useState(1)


    const changePageHandle = p =>{
        setPage(p)
      
       }
       const AddOnePage=(pa)=>{
           if(page<10){
            setPage(pa+1)
           }
        }
        const AddtwoPage=(pa)=>{
            if(page<10){
             setPage(pa+2)
            }
         }
    
    
  return (
      <>
      
    <div className={styles.conatiner}>
      <div></div>
      <div>
          {pages.map((item, index)=>{
            return(
                <button
                 className={item.page === page ? styles.active : styles.btn  } 
                 key={index}
                 onClick={()=>changePageHandle(item.page)}>{item.page}</button>
            )
             })}
         <button className={styles.btn} onClick={()=>AddOnePage(page)} >   <Image src={arrowBlack}/> </button>
         <button className={styles.btn} onClick={()=>AddtwoPage(page)}>  <Image src={arrowBlack}/><Image src={arrowGray}/></button>
         </div>
         <div><ToTop /></div>
    </div>
  
    </>
  )
}

export default Pagination