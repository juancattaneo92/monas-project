import React, { useState } from 'react'
import { fetchMenuItems } from '../../actions/MenuItemActions'

export default function MenuItemIndex(){
  const [menuItems, setMenuItems] = useState([])
  
  useEffect(() => {
    let mounted = true
    fetchMenuItems()
      .then(items => {
        if(mounted) {
          setMenuItems(items)
        }
      })
    return () => mounted = false 
  }, [])

  return(
    <div className="menu-index-section">
      <div className="wrapper-menu-index">
        {menuItems.map(item=> <li key={item.id}>{item.name}</li>)}
      </div>
    </div>
  )
}
