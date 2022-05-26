import React from 'react'
import Image from 'next/image'

import styles from './UserReview.module.css'
import Bulb from '../../public/images/Path 710.png'

function UserReview( {...singleProduct}) {
    const {model, name}= singleProduct
  return (
      <>
      <div className={styles.main}>
    <div className={styles.conatiner}>
        <h3 className={styles.head}> <Image src={Bulb}/> <span>نظرات کاربران </span></h3>
        <p className={styles.name}>{name} مدل {model}</p>
       <p>لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید</p>
<p>فارسی بنویسید و از کیبورد فارسی استفاده کنید. بهتر است از فضای خالی بیش‌از‌حدِ معمول، شکلک یا ایموجی استفاده نکنید و از کشیدن حروف یا کلمات با صفحه‌کلید بپرهیزید
</p>
<p>نظرات خود را براساس تجربه و استفاده‌ی عملی و با دقت به نکات فنی ارسال کنید بدون تعصب به محصول خاص، مزایا و معایب را بازگو کنید و بهتر است از ارسال نظرات چندکلمه‌‌ای خودداری کنید
</p>
<p>بهتر است در نظرات خود از تمرکز روی عناصر متغیر مثل قیمت، پرهیز کنید به کاربران و سایر اشخاص احترام بگذارید. پیام‌هایی که شامل محتوای توهین‌آمیز و کلمات نامناسب باشند، حذف می‌شوند</p>
    </div>
    <div className={styles.conatiner2}> 
    <p>برای ثبت دیدگاه، لازم است ابتدا وارد حساب کاربری خود شوید</p>
    <p>اگر این محصول را قبلا از این فروشگاه خریده باشید، دیدگاه شما به عنوان مالک محصول ثبت خواهد شد</p>
    <button className={styles.btn}>افزودن دیدگاه جدید</button>
    </div>

      </div>

<div className={styles.conatiner3}>
   <p>دیدگاه ها</p>
   <p>.هیچ دیدگاهی برای این محصول نوشته نشده است</p>

</div>
</>

  )
}

export default UserReview

