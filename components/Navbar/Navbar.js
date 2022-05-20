import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '../../public/images/Group 527.png'
import box from '../../public/images/Group 526.png'
import searchIcon from '../../public/images/Group 525.png'
import SearchInput from './SearchInput'
import sidebarIcon from '../../public/images/Group 533.png'
import RouterComponent from './RouterComponent'


import { useRouter } from "next/router";

const Navbar=()=> {

    const router = useRouter();
    const pathame=router.pathname
    var flage;
    if(pathame === '/'){
        flage=true
    }
    //console.log(flage)


    return (
        <>
          <div className={flage ? styles.nav : styles.nav2}>
              <div className={styles.icons}>
                <Image src={logo} />  
                   <div className={styles.box}><Image src={box} /> </div>
                <SearchInput/>
                </div>
             <div className={styles.humburger}>
                 {flage ?  '' : <RouterComponent />}
         
             <Image src={sidebarIcon} />  
               
             </div>
        </div>
      
       
        </>
    )
}
 


export default Navbar