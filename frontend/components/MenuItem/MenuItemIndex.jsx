import React, { useState, useEffect } from 'react'
// import { fetchMenuItems } from '../../actions/MenuItemActions'
import { fetchMenuItems } from '../../util/MenuItemApiUtil'

export default function MenuItemIndex(props){
  const [menuItems, setMenuItems] = useState();
  
  useEffect(() => {
    items.then(menuItems => {
      let items = fetchMenuItems(menuItems)
        setMenuItems(items)
      })
  }, [menuItems])

  return(
    <div className="menu-index-section">
      <div className="wrapper-menu-index">

        {menuItems.map(item=> <li key={item.id}>{item.name}</li>)}
      </div>
    </div>
  )
}
