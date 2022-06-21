import React , { useEffect} from 'react';
import Box from '@mui/material/Box';
import { useDispatch , useSelector} from 'react-redux';
import Slider from '@mui/material/Slider';
import styles from './FilterRang.module.css'

import { addMaxPrice, addMinPrice } from '../../feactures/filtersSlice';
import {retrunMinPrice } from '../../feactures/filtersSlice';
const valuetext=(value) =>{
  return `${value}`;
}

const minDistance = 10;

 const FilterRange =() =>{
   const dispatch =useDispatch()
   const filters= useSelector(state=>state.filters)
   const stateFlag= filters.flag
   console.log(stateFlag)

   const minPrice= filters.minPrice
   const maxPrice= filters.maxPrice
  
  
 

  const [value1, setValue1] = React.useState([minPrice,maxPrice]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  useEffect(()=>{
    if(!stateFlag) return
     if(stateFlag){
      setValue1([100,1000])
  
   
    }

   },[stateFlag],[filters.minPrice])

 useEffect(() => {
   dispatch(addMaxPrice(value1[1]),filters)
  }, [value1[1]])

 useEffect(() => {
  dispatch(addMinPrice(value1[0]),filters)
 
  }, [value1[0]])

  //useEffect to return price to initial value when click on cleaer btn//
  


  return (
      <>
      <div className={styles.line}></div>
    <Box className={styles.rang}>
        <p className={styles.title}>محدوده قیمت ( تومان)</p>
      <Slider
      className={styles.slider}
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        min={100}
        max={1000}
        step={100}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <div className={styles.priceContainer}> <p>{value1[1]}</p> <p>{value1[0]}</p></div> 

     
    </Box>
    </>
  );
}
export default FilterRange
