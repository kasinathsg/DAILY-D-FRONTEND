import React from 'react'
import logo1 from "../assets/logo1.png"
import { Link } from 'react-router-dom'
import './navbar2.css'
import ars from "../assets/ars.png"
import tnw from "../assets/tnw.png"
import eng from "../assets/eng.png"
import muo from "../assets/muo.png"
import vent from "../assets/vent.png"
import giz from "../assets/giz.png"
import digi from "../assets/digi.png"
import verge from "../assets/verge.png"
import police from "../assets/police.png"
import andr from "../assets/andr.png"
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar2() {
  return (
    <div>
        <input type="checkbox" id='check'/>
        <label for="check">
           <FaBars id='btn'/>
            <FaTimes id='cancel'/>
        </label>
        <div className='sidebar'>
            <header>
            
     
        <img src={logo1}/>   
      
      
      
            </header>
            <ul>
                <li>
            <Link to={"/androidauthority"}>
        
        <img src={andr}/>
        
        </Link></li>
           
        <li><Link to={"/tnw"}>
          
        <img src={tnw}/>
        
          </Link></li>

          <li><Link to={"/engadget"}>
        
        <img src={eng}/>
        
        </Link> 
        </li>

        <li>
            
        <Link to={"/androidpolice"}>
        
        <img src={police}/>
        
        </Link>
        </li>

        <li>

        <Link to={"/venture"}>
        
        <img src={vent}/>
        
        </Link>

        </li>

        <li>

        <Link to={"/gizmodo"}>
        
        <img src={giz}/>
        
        </Link>
        </li>
        <li>

        <Link to={"/arstechnica"}>
          
              <img src={ars}/>
              
          </Link>
        </li>

       <li>
        
         <Link to={"/theverge"}>
        
        <img src={verge}/>
        
        </Link>
        </li>

        <li>

        <Link to={"/muo"}>
        
        <img src={muo}/>
        
        </Link>
        </li>


<li>

      <Link to={"/digitaltrends"}>
        
        <img src={digi}/>
       
        </Link>
</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar2