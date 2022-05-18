import React from 'react'
import searchIcon from '../../public/images/Group 525.png'
import styles from './SearchInput.module.css'
import Image from 'next/image'

function SearchInput() {
  return (
      <>
     
       
      <div className={styles.searchBar}>
      <span className={styles.icon}><Image src={searchIcon}/></span>
         <input 
           className={styles.input}
            type="text"
            placeholder="جستجو"
         />
      </div>
     
      </>
  )
}

export default SearchInput