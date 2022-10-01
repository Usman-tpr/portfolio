import React, { useState } from 'react'
import "./sidebar.css"

import { BsArrowLeftShort,BsArrowRightShort} from "react-icons/bs";
import { Sidelist } from './Sidelist';
import Home from './Home'

export default function Sidebar() {

    const [expand,setexpand]=useState(true);

    const handleexpand=()=>{
        setexpand(!expand);
    }
  return (
    <div className='container-fluid  extra sidebarportion'>

        <div className={expand?"sidebar-expand sidebar-section":"sidebar-section"}>
            <div className="iconec">


         <p onClick={handleexpand}>
            {expand?(<BsArrowLeftShort size={30}/>):
            (<BsArrowRightShort size={30}/>)}
         </p>
            </div>
           
            <Sidelist expand={expand}/>

        </div>
        
        
        <div className='container-fluid header1'>
        <Home/>

        </div>
              
    </div>
  )
}
