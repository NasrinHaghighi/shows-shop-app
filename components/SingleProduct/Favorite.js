import React from 'react'
import Heart from '../../public/images/Group 844.png'
import Image from 'next/image'
import styles from './Favorite.module.css'

function Favorite() {
  return (
    <div className={styles.favoraite}>
        <Image src={Heart}/>
        <p>افزودن به علاقمندی ها</p>
    </div>
  )
}

export default Favorite