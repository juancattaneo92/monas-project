import React, { useState, useEffect } from 'react'
import { fetchMenuItems } from '../../actions/MenuItemActions'
// import { fetchMenuItems } from '../../util/MenuItemApiUtil'


export default function MenuItemIndex( props ){
  const [menuItems, setMenuItems] = useState();
  const[isLoading] = useState(true)
  
  useEffect(() => {
    fetchMenuItems()
    console.log("working")
    }, [])


  return(
    <div className="menu-index-section">
      <div className="wrapper-menu-index">
        {/* { menuItems.map(item => {
          item.name
        }) */}

        
      </div>
    </div>
  )
}
