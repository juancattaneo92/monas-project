import React, { useState, useEffect } from 'react'

export default function MenuItemIndex() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);

  const getItems = async () => {
    const response = await fetch('api/menu_items')
    const items = await response.json()
    setItems(items)
  }

  const sortByCategories = () => {

  }
 
  useEffect(() => {
    getItems()
  }, [])

  const categories = ["Burgers", "Salads", "Starters", "Fries", "Un-Burgers", "Beverages", "Sides"]

  return (
    <div>
      <div className="menu-navBar-section m-t">
        <div className="menu-navBar-container">
          <div className="menu-category">{categories.map(cat => {
            return (
              <ul className="menu-single-category" >{cat}</ul>
            )
          })}
          </div>
          <input className="menu-searchBar" type="text" placeholder="What are you looking for?"></input>
        </div>
      </div>
      <section className="menu-index-section">
        <div className="menu-index-container">
          <div className="wrapper-menu-index">
            
            {items.map(item => {
              return (
                <ul className="menu-item-index" key={item.id}>
                  <img src={item.photo} alt=""/>
                  <div className="menu-details">
                    <div className="menu-name">
                      <li>{item.name}</li>
                      <li>$ {item.price}</li>
                    </div>
                    <li>{item.description}</li>
                    <button className='action-button-a menu-items'>Take me Home</button>
                  </div>
                </ul>
              )
            })}

          </div>
          <div className="shopping-cart-index">
            <h1 className="current-order-title">Ready To Order?</h1>
          </div> 
        </div>
      </section>
    </div>
  )
}
