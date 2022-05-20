import React from 'react'
import styles from './Filterby.module.css'
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Category from './Category';
import Brand from './Brand'
import Availeble from './Availeble';
import FilterRange from './FilterRang';
import {fillterProductsHandler} from '../../feactures/allProductsSlice'
import { useDispatch, useSelector } from 'react-redux';

function Filterby() {
  const dispatch=useDispatch()
  const filters= useSelector(state=>state.filters)
  //console.log(filters)


  return (
    <FormControl className={styles.container}>
        
       <Category />
       <Brand />
       <Availeble />
       <FilterRange />
       <div className={styles.btnContainer}>
       <Button  onClick={() => dispatch(fillterProductsHandler(filters))}> اعمال فیلترها </Button>
        <Button  onClick={() => { alert('clicado'); }}> پاک کردن</Button>
        </div>
        </FormControl>
  )
}

export default Filterby