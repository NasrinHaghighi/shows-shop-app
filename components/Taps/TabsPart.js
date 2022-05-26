import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import styles from './TabsPart.module.css'

import Description from './Description'
import UserReview from './UserReview';
import UserQ from './UserQ';
import Analize from './Analize'

function TabsPart({...singleProduct}) {

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className={styles.box}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="توضیحات" value="1" className={styles.tab}/>
          <Tab label="نظرات کاربران" value="2" className={styles.tab}/>
          <Tab label="سوالات کاربران" value="3" className={styles.tab}/>
          <Tab label="نقد و بررسی" value="4" className={styles.tab}/>
        </TabList>
      </Box>
      <TabPanel value="1" className={styles.TabPanel}><Description {...singleProduct}/></TabPanel>
      <TabPanel value="2" className={styles.TabPanel}><UserReview {...singleProduct}/></TabPanel>
      <TabPanel value="3" className={styles.TabPanel}><UserQ {...singleProduct}/></TabPanel>
      <TabPanel value="4" className={styles.TabPanel}><Analize {...singleProduct}/></TabPanel>
    </TabContext>
  </Box>

  )
}

export default TabsPart



