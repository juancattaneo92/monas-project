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
    <section className="menu-index-section">
      <div className="wrapper-menu-index">
      
        {items.map(item => {
          return (
            <ul className="menu-item-index" key={item.id}>
                <div>
                  <img src={'https://happilyunprocessed.com/wp-content/uploads/2018/03/Juicest-Burger-Everfeature.jpg.jpg'} alt=""/>
                </div>
                <div className="menu-details">
                  <li>{item.name}</li>
                  <li>{item.description}</li>
                  <li>$ {item.price}</li>
                </div>
            </ul>
          )
        })}
        
      </div>
      <div className="shopping-cart-index">
          <h1 className="current-order-title">Current Order</h1>
      </div>
    </section>
  )
}
