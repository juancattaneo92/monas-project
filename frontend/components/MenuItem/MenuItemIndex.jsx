import React, { useState, useEffect } from 'react'
// import { fetchMenuItems } from '../../actions/MenuItemActions'
import { fetchMenuItems } from '../../util/MenuItemApiUtil'


export default function MenuItemIndex(){
  const [items, setItems] = useState([]);

    const getItems = async () => {
      const response = await fetch('api/menu_items')
      const items = await response.json()
        setItems(items)
    }

    useEffect(()=>{
      getItems()
    }, [])

 

  return(
    <div className="menu-index-section">
      <div className="wrapper-menu-index">
      
        {items.map(item => {
          return (
            <div key={item.id}>
                {item.name}
                {item.description}
                {item.price}
            </div>
          )
        })}
      {/* {items.name} */}
        
      </div>
    </div>
  )
}
