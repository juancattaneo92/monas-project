import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Category from '../Category/Category'


function MilkshakeIndex() {
    const [milkshake, setMilkshake] = useState([]);

    const getMilkshake = async () => {
        const response = await fetch(`api/menu-items/milkshake`)
        const items = await response.json()
        setMilkshake(items)
    }

    useEffect(() => {
        getMilkshake()
    }, [])

    return (
        <div className="menu-index">
            <Category />
            <section className="menu-index-section">
                <div className="menu-index-container">
                    <div className="wrapper-menu-index">
                        {milkshake.map(item => {
                            console.log(item)
                            return (
                                <ul className="menu-item-index" key={item.id}>
                                    <img src={item.photo} alt="" />
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

export default MilkshakeIndex