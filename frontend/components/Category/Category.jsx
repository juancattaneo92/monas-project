import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export const Category = () => {
  // const [items, setItems] = useState([]);
  // const [category, setCategory] = useState([]);
  // // const categories = ["Burgers", "Salads", "Starters", "Fries", "Un-Burgers", "Beverages", "Sides"]

  //   const getItems = async () => {
  //     const response = await fetch('api/menu_items')
  //     const items = await response.json()
  //     setItems(items)
  // }

  //   useEffect(() => {
      
  // }, [])


  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const {data} = await axios.get('/api/products/random-lucky-box')

  //     setProduct(data)
  //   }

  //   fetchProduct()
  // }, [])

  // useEffect(() => {
  //   const fetchCategory = async () => {
  //     const {data} = await axios.get(`/api/categories/${product.catId}`)

  //     setCategory(data)
  //   }

  //   fetchCategory()
  // }, [])

  return (
    // <div>
    //     <Link onClick={() => this.setCategory("burgers")} to="/burgers" className="category">Burgers</Link>
    //     <Link onClick={() => this.setCategory("salad")} to="/salad" className="category">Salads</Link>
    //     <Link onClick={() => this.setCategory("starters")} to="/starters" className="category">Starters</Link>
    //     <Link onClick={() => this.setCategory("fries")} to="/fries" className="category">Fries</Link>
    //     <Link onClick={() => this.setCategory("un-burger")} to="/un-burger" className="category">Un-Burgers</Link>
    //     <Link onClick={() => this.setCategory("beverage")} to="/beverage" className="category">Beverages</Link>
    //     <Link onClick={() => this.setCategory("milkshake")} to="/milkshake" className="category">Milkshakes</Link>  
    // </div>
    <div className="category-wrapper">
        <Link  to="/menu-items/burgers" className="category">Burgers</Link>
        <Link  to="/menu-items/fries" className="category">Fries</Link>
        <Link to="/menu-items/salad" className="category">Salads</Link>
        <Link to="/menu-items/starters" className="category">Starters</Link>
        <Link to="/menu-items/un-burger" className="category">Un-Burgers</Link>
        <Link to="/menu-items/beverage" className="category">Beverages</Link>
        <Link to="/menu-items/milkshake" className="category">Milkshakes</Link>
    </div>
  )
}

export default Category
