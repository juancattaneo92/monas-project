import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export const Category = () => {

  return (
    <div className="menu-category">
            <Link to='/menu-items/burgers' className="menu-single-category" >Burgers</Link>
            <Link to='/menu-items/salad' className="menu-single-category" >Salads</Link>
            <Link to='/menu-items/starters' className="menu-single-category" >Starters</Link>
            <Link to='/menu-items/fries' className="menu-single-category" >Fries</Link>
            <Link to='/menu-items/beverage' className="menu-single-category" >Beverages</Link>
            <Link to='/menu-items/milkshake' className="menu-single-category" >Milshakes</Link>
            <Link to='/menu-items/un-burger' className="menu-single-category" >Un-Burgers</Link> 
    </div>
  )
}

export default Category
