import React, {useState} from 'react'
import styles from './Colorpart.module.css'

function ColorPart({colors, selectColor, mainColor}) {
  
  return (
    <div className={styles.colors}>
    <span>  انتخاب رنگ : </span>
    
      <div>
        {colors.map((color, index)=>{
          return(
            <button 
            key={index}
             style={{background:color }}
              className={mainColor === color? styles.colorBtnActive : styles.colorBtn}
              onClick={() => {selectColor(color)}}
           > 
              
            </button>
          )
        })}
      </div>
    
  </div>
  )
}

export default ColorPart