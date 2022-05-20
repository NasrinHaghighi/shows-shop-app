import React from 'react'
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux'

function SingleProductPage() {
  const router =useRouter()
  const productId = router.query.productId
    console.log(productId)

    //const singleProduct =products.find((p)=>p.id === productId)
  return (
    <div></div>
  )
}

export default SingleProductPage