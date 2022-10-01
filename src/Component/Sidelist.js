import React from 'react'
import './sidebar.css'
import profile from './a.jpg'

import { FcHome,FcAbout,FcCalendar,FcPositiveDynamic,FcContacts} from "react-icons/fc";

export const Sidelist = ({expand}) => {
  return (
  <React.Fragment>
 {expand?(
      <div className="navitems">
      <div className="profile">
                <img src={profile} alt="" />
      </div>
      <ul>
        <li><FcHome size={20}/>Home</li>
        <li><FcAbout size={20}/>About</li>
        <li><FcCalendar size={20}/>Education</li>
        <li><FcPositiveDynamic size={20}/>Our Projects</li>
        <li><FcContacts size={20}/>Contact Us</li>
        
      </ul>
     </div>
 ):(
    <div className='colitems'>
         <ul>
        <li className='lihead'><FcHome size={30}/></li>
        <li><FcAbout size={30}/></li>
        <li><FcCalendar size={30}/></li>
        <li><FcPositiveDynamic size={30}/></li>
        <li><FcContacts size={30}/></li>
        
      </ul>
    </div>
 )}
  </React.Fragment>

  )
}
