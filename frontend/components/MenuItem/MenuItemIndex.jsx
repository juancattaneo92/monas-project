import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MenuItemIndex() {
  const [fries, setFries] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [category, setCategory] = useState([]);

  const getFries = async () => {
    const response = await fetch(`api/menu-items/fries`)
    const items = await response.json()
    setFries(items)
  }

  const getBurgers = async () => {
    const response = await fetch(`api/menu-items/burgers`)
    const items = await response.json()
    setBurgers(items)
  }

   useEffect(() => {
    getBurgers()
  }, [])

  useEffect(() => {
    getFries()
  }, [])


  return (
    <div className="menu-index">
      <section className="menu-index-section">
        <div className="menu-index-container">
          <div className="wrapper-menu-index">
            {}
            {fries.map(fry => {
              return (
                <div key={fry.id}>{fry.name}
                {fry.photo}</div>
              )
            })}
            {/* {burgers} */}
            {/* {items.map(item => {
                  console.log(item)
              return (
                <ul className="menu-item-index" key={item.id}>
                  <img src={item.photo} alt=""/>
                  <div className="menu-details">
                    <div className="menu-name">
                      <li>{item.name}</li>
                      <li>$ {item.price}</li>
                    </div>
                    <li>{item.description}</li>
                    <button className='action-button-b menu-items'>Take me Home</button>
                  </div>
                </ul>
              )
            })} */}

          </div>
          <div className="shopping-cart-index">
            <h1 className="current-order-title">Ready To Order?</h1>
          </div> 
        </div>
      </section>
    </div>
  )
}



  // const categories = ["Burgers", "Salads", "Starters", "Fries", "Un-Burgers", "Beverages", "Sides"]

        {/* <div className="menu-navBar-section">
        <div className="menu-navBar-container">
          <div className="menu-category">{categories.map(cat => {
            return (
              <div></div>
              // <Link key={cat} className="menu-single-category" >{cat}</Link>
            )
          })}
          </div>
          <input className="menu-searchBar" type="text" placeholder="What are you looking for?"></input>
        </div>
      </div> */}
