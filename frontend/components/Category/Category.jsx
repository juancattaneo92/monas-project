import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'

export const Category = ( props ) => {
  // const [category, setCategory] = useState("")
  let category = window.location.hash.split("/")[2]
  let setCategory = props.setCategory
  const history = useHistory()
  
  const getCategories = () => {
    // let category = props.category
    setCategory(category)
    // console.log(category)
  }
  useEffect(()=>{    
    // console.log(category)
    let mounted = true
    getCategories()
    if(mounted){
      setCategory(category)
          }
     return () => {
        mounted = false
      }
  },[category])

  function handleClick(e){
    let cat = e.target.id
    setCategory(cat)
    history.push(`/menu-items/${cat}`)
  }

  return (
    <div className="menu-category">
            <button onClick={handleClick} className="menu-single-category" id="burgers" >Burgers</button>
            <button onClick={handleClick} className="menu-single-category" id="salad" >Salads</button>
            <button onClick={handleClick} className="menu-single-category" id="starters" >Starters</button>
            <button onClick={handleClick} className="menu-single-category" id="fries" >Fries</button>
            <button onClick={handleClick} className="menu-single-category" id="beverage" >Beverages</button>
            <button onClick={handleClick} className="menu-single-category" id="milkshake" >Milshakes</button>
            <button onClick={handleClick} className="menu-single-category" id="un-burger" >Un-Burgers</button> 
    </div>
  )
}

export default Category
