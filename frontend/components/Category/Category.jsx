import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export const Category = () => {
  const [category, setCategory] = useState("")

  const getCate = () => {
    const category = window.location.hash.split("/")[2]
    setCategory(category)
    console.log(category)
  }
  useEffect(()=>{
    getCate()
  })

  return (
    <div className="menu-category">
            <Link to='/menu-items/burgers' onClick={() => setCategory(category)} className="menu-single-category" >Burgers</Link>
            <Link to='/menu-items/salad' onClick={() => setCategory(category)} className="menu-single-category" >Salads</Link>
            <Link to='/menu-items/starters' onClick={() => setCategory(category)} className="menu-single-category" >Starters</Link>
            <Link to='/menu-items/fries' onClick={() => setCategory(category)} className="menu-single-category" >Fries</Link>
            <Link to='/menu-items/beverage' onClick={() => setCategory(category)} className="menu-single-category" >Beverages</Link>
            <Link to='/menu-items/milkshake' onClick={() => setCategory(category)} className="menu-single-category" >Milshakes</Link>
            <Link to='/menu-items/un-burger' onClick={() => setCategory(category)} className="menu-single-category" >Un-Burgers</Link> 
    </div>
  )
}

export default Category
