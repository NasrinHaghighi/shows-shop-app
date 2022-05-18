import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from '@mui/material/FormGroup';
import styles from './Availeble.module.css'

function Availeble() {
    return <div className={styles.availble}>
  
  
    <FormGroup >
             <FormControlLabel
              control={<Checkbox
                color="default"
             //checked={checked1}
               //onChange={(e)=>dispatch(availabilityChangeHandel(e ))} 
               />} label='فقط کالا های موجود'/>
            </FormGroup>
    
    </div>;
}

export default Availeble