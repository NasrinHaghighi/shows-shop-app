import React from 'react'
import styles from './ProductImage.module.css'



import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 





function ProductImage({...singleProduct}) {
const {images}= singleProduct
   
  return (
    <div className={styles.continer}>
      <Carousel  showArrows={true} infiniteLoop={true} >
    {images.map(item=> <img src={item.src} key={item.id} className={styles.img}/>) }
     
     </Carousel>

    </div>
  )
}

export default ProductImage

// {items.map((item, i) =>
//     <Carousel.Item key={i}>
//        <a className="thumbnail" href="javascript:void(0)">
//          <img className="media-object"
//            src={item.img}
//            alt={item.alt}
//          />
//        </a>
//      </Carousel.Item>)}