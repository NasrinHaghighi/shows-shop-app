import React from 'react'
import FilledStar from '../../public/images/Path 946.png'
import nonFilledStar from '../../public/images/Path 950.png'
import Image from 'next/image';

function Stars({stars}) {
   
    return (
    <div>
    <span>   {stars>=1 ?   <Image src={FilledStar} />  :  <Image src={nonFilledStar} />} </span>
    <span>   {stars>=2 ?   <Image src={FilledStar} />  :  <Image src={nonFilledStar} />} </span>
    <span>   {stars>=3 ?   <Image src={FilledStar} />  :  <Image src={nonFilledStar} />} </span>
    <span>   {stars>=4 ?   <Image src={FilledStar} />  :  <Image src={nonFilledStar} />} </span>
    <span>   {stars>=5 ?   <Image src={FilledStar} />  :  <Image src={nonFilledStar} />} </span>
</div>
);
}

export default Stars