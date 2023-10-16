import React from 'react'
import { LuMenu} from 'react-icons/lu'
import "../stylesheet/component.css";
import {BiSearch} from "react-icons/bi"
import {GoBell} from "react-icons/go"
import user from "../image/Ellipse 922.png"

export const Topnav = ({toggleSidebar}) => {

  const name = localStorage.getItem('fName')
  const currentDate = new Date();


const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
// const dayNames = [
//   "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ];


const day = currentDate.getDate();
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

const formattedDate = `${day} ${month} ${year}`;


  return (
    <div className="top_nav">
      <div className="icon_menu">
        <div className="menu-icon" onClick={toggleSidebar}>
        <LuMenu/>
      </div>
      <div className="icon_text">
        <h3>Hello {name}</h3>
        <p>{formattedDate}</p>
      </div>
      </div>
      <div className="icon_menu">
        <div className="search">
          <BiSearch/>
          <input type="text" placeholder="Search"/>
        </div>
        <div className="bell">
          <GoBell/>
          <span>6</span>
        </div>
        <img src={user} alt="" />

      </div>
      
    </div>
  )
}
