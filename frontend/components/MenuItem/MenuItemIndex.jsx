import React, { useState, useEffect } from 'react'

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

  // const categories = [Burgers, Salads, Starters, Fries, Un-Burgers, Beverages, Sides]

  return(
    <div>
      <div></div>
      <section className="menu-index-section">
        <div className="wrapper-menu-index">
          {items.map(item => {
            return (
              <ul className="menu-item-index" key={item.id}>
                  <img src={'https://happilyunprocessed.com/wp-content/uploads/2018/03/Juicest-Burger-Everfeature.jpg.jpg'} alt=""/>
                  <div className="menu-details">
                    <div className="menu-name">
                      <li>{item.name}</li>
                      <li>$ {item.price}</li>
                    </div>
                    <li>{item.description}</li>
                    <button className='action-button menu-items'>Take me Home</button>
                  </div>
              </ul>
            )
          })}
          
        </div>
        <div className="divider"></div>
        <div className="shopping-cart-index">
            <h1 className="current-order-title">Ready To Order?</h1>
        </div>
      </section>
    </div>
  )
}
