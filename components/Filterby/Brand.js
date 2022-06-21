import React ,{useState ,useEffect}from 'react'
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

import styles from './Brand.module.css'

import { addBrand } from '../../feactures/filtersSlice';
import {cahngeStateFlag } from '../../feactures/filtersSlice';
import {useDispatch, useSelector} from 'react-redux'

function Brand() {
let brands = [...new Set(products.map(item => item.brand))];


const [brandSele, setBrandSele]=  useState([])
const dispatch = useDispatch()



////////////////////////////////////////////////
 const filters= useSelector(state=>state.filters)
 const brandsinfilters=filters.brand
 //console.log(brandSele)
 //console.log(brandsinfilters)
 const stateFlag= filters.flag
// console.log(stateFlag)



///////////////////////////////
const makeBrandsList=(e)=>{
 if(e.target.checked){
  setBrandSele([...brandSele, e.target.value])

 }else{
 brandSele=brandSele.filter((i)=>{
   return i !== e.target.value
 })
 setBrandSele([...brandSele])
 }
}
/////////////////

/////////////
useEffect(() => {
  dispatch(addBrand(brandSele))
}, [brandSele])

useEffect(()=>{
  //console.log('the brandsele array shoul return to the []')
  setBrandSele([])
  dispatch(cahngeStateFlag(false))
},[stateFlag])



// if(stateFlag){
//   console.log('the brandsele array shoul return to the []')
//   setBrandSele([])
//   console.log(brandSele)
// }


  return (
    <div>
        <Accordion className={styles.main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="span">برند </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List className={styles.list}>
              {brands.map((c)=>{
         return(  
                  <ListItem  key={c} className={styles.listItem}>
                  <FormControlLabel control={<Checkbox
                  type="checkbox"
                 name={c}
                 value={c}
                 color="default"
                 checked={brandsinfilters.includes(c)}
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

export default Brand


