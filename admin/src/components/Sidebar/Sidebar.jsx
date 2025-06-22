import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/added' className="sidebar-option">
                <img src={assets.add_icon} alt="add_icon_img" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="add_icon_img" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img src={assets.order_icon} alt="add_icon_img" />
                <p>Orders</p>
            </NavLink>
        </div>
       
    </div>
  )
}

export default Sidebar