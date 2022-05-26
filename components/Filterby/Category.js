import React, {useState, useEffect} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FormControlLabel from "@material-ui/core/FormControlLabel";

import{ products }from '../../services/productsList'

import styles from './Category.module.css'
//console.log(products) ok

import { useDispatch } from 'react-redux';
import {addCategory} from '../../feactures/filtersSlice'

function Category() {
  let category = [...new Set(products.map(item => item.category))];

  const [categorySele, setCategorySele]=  useState([])
  const dispatch = useDispatch()
 
 const makeBrandsList=(e)=>{
  if(e.target.checked){
    setCategorySele([...categorySele, e.target.value])
 
  }else{
    categorySele=categorySele.filter((i)=>{
    return i !== e.target.value
  })
  setCategorySele([...categorySele])
  }
 }
 
 useEffect(() => {
 dispatch(addCategory(categorySele))
 }, [categorySele])
  return (
    <div>
      <Accordion className={styles.main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="span">دسته بندی</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <List className={styles.list}>
              {category.map((c)=>{
             
             return(  
 
                   <ListItem  key={c} className={styles.listItem}>
                  <FormControlLabel control={<Checkbox
                   type="checkbox"
                   name={c}
                  value={c}
                  
                  color="default"
                 //checked={filterOption.selectedBrand.includes(c)}
                 onChange={makeBrandsList}
                   />} 
                label={c}/> 
                    </ListItem>
              )
               })}
              </List>
        
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  )
}

export default Category