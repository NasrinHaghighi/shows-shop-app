import React ,{useState, useEffect}from 'react'
import styles from './RegisterForm.module.css'
import Image from 'next/image'
import { useFormik } from 'formik';
import map from '../../public/images/Group 598.png'
import {useDispatch , useSelector} from 'react-redux'

import {changeFlagValuesInfo} from '../../feactures/flagValuesInfoSlice'

import {setUserInfo } from '../../feactures/userInfoSlice'
import {loginUser} from '../../feactures/loginSlice'

function RegisterForm() {
    const dispatch = useDispatch()
    
    const [sucsses, setSucces]= useState(false)


    useEffect(() => {
     let timeout
     if (sucsses) {
       timeout = setTimeout(() => setSucces(false), 2000);
    }
  
     return () => clearTimeout(timeout);
 }, [sucsses]);
    
const formik = useFormik({
    initialValues:
      {fullName: '',
     state1:'',
     city:'',
     address:'',
     code:'',
     phone:'',
     email:'',
    },
     onSubmit:(values)=>{
      setSucces(true)
      dispatch(setUserInfo(values))
    //this func is to change the falge when the user fill inputs correctly// by change this flag to true the text of button change
      dispatch(changeFlagValuesInfo(true))
      dispatch(loginUser(true))
   
     },
     validate: values=>{
      ///values.name values.plak ....
      //errors.name ...
      //errors.name ='message'
  let errors ={}
  
      if(!values.fullName){
         errors.fullName ='وارد کردن نام کامل اجباری است.'
     }
     if(!values.state1){
        errors.state1 ='وارد کردن نام استان اجباری است.'
    }
    if(!values.city){
        errors.city ='وارد کردن نام شهر اجباری است.'
    }
    if(!values.address){
        errors.address ='وارد کردن آدرس کامل اجباری است.'
    }
    if(!values.code){
        errors.code ='وارد کردن کدپستی اجباری است.'
    }

     if(!values.phone){
                 errors.phone ='وارد کردن شماره تلفن اجباری است.'
                   }       
               else if(!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(values.phone)){
                      errors.phone ='شماره وارد شده معتبر نمی باشد '
                 }
   if(!values.email){
                  errors.email ='وارد کردن ایمیل اجباری است.'
                    }       
                 else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)){
                       errors.email ='ایمیل وارد شده معتبر نمی باشد '
                  }
      
      return errors
  }
  })
  return (
    <>
    {sucsses ? <p className={styles.sucsses}>اطلاعات و مشخصات شما با موفقیت ذخیره شد</p> : null} 
    <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.formContainer}>
        <div className={styles.formControl}>
         <label className={styles.label}> نام و نام خانوادگی *</label>
        <input className={styles.input}
          type="text" placeholder='مریم عسکری'
          name="fullName"
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          onChange={formik.handleChange}
          />
           {formik.touched.fullName && formik.errors.fullName ? <div className={styles.error}>{formik.errors.fullName}</div>: null}
        </div>


<div className={styles.stateConatiner}>
        <div className={styles.formControl}>
         <label className={styles.label}> استان *</label>
        <input className={styles.input}
          type="text" placeholder='تهران'
          name="state1"
          onBlur={formik.handleBlur}
          value={formik.values.state1}
          onChange={formik.handleChange}
          />
           {formik.touched.state1 && formik.errors.state1 ? <div className={styles.error}>{formik.errors.state1}</div>: null}
        </div>

        <div className={styles.formControl}>
         <label className={styles.label}> شهر *</label>
        <input className={styles.input}
          type="text" placeholder='تهران'
          name="city"
          onBlur={formik.handleBlur}
          value={formik.values.city}
          onChange={formik.handleChange}
          />
           {formik.touched.city && formik.errors.city ? <div className={styles.error}>{formik.errors.city}</div>: null}
        </div>

        </div>

        <div className={styles.formControl}>
         <label className={styles.label}> آدرس *</label>
        <input className={styles.input}
          type="text" placeholder=''
          name="address"
          onBlur={formik.handleBlur}
          value={formik.values.address}
          onChange={formik.handleChange}
          />
           {formik.touched.address && formik.errors.address ? <div className={styles.error}>{formik.errors.address}</div>: null}
        </div>

        <div className={styles.formControl}>
         <label className={styles.label}> کدپستی *</label>
        <input className={styles.input}
          type="text" placeholder=''
          name="code"
          onBlur={formik.handleBlur}
          value={formik.values.code}
          onChange={formik.handleChange}
          />
           {formik.touched.code && formik.errors.code ? <div className={styles.error}>{formik.errors.code}</div>: null}
        </div>
        


        <div className={styles.formControl}>
         <label className={styles.label}> شماره تلفن همراه*</label>
        <input className={styles.input}   type="text" 
        name="phone"
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        onChange={formik.handleChange}
        />
        {formik.touched.phone && formik.errors.phone ? <div className={styles.error}>{formik.errors.phone}</div>: null}
        </div>
        


        <div className={styles.formControl}>
         <label className={styles.label}> ایمیل *</label>
        <input className={styles.input}     type="email"
         name="email"
         onBlur={formik.handleBlur}
         value={formik.values.email}
         onChange={formik.handleChange}
        />
         {formik.touched.email && formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div>: null}
        </div>
      
        </div>
        <div>
<Image src={map}/>
        </div>
        <div className={styles.btn}>
        <input type="submit" value='ذخیره' className={styles.submitBtn}/>
        </div>
    </form>
   
    </>
  )
}

export default RegisterForm