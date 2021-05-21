import React from 'react'
import { Link } from 'react-router-dom'

export const Category = () => {
  const [category, setCategory] = useState([]);
  // const categories = ["Burgers", "Salads", "Starters", "Fries", "Un-Burgers", "Beverages", "Sides"]

  return (
    <div>
        <Link onClick={() => this.setCategory("jewelry-accessories")} to="/jewelry-accessories" className="category">Jewelry &amp; Accessories</Link>
        <Link onClick={() => this.setCategory("clothing-shoes")} to="/clothing-shoes" className="category">Clothing &amp; Shoes</Link>
        <Link onClick={() => this.setCategory("home-living")} to="/home-living" className="category">Home &amp; Living</Link>
        <Link onClick={() => this.setCategory("wedding-party")} to="/wedding-party" className="category">Wedding &amp; Party</Link>
        <Link onClick={() => this.setCategory("art-collectibles")} to="/art-collectibles" className="category">Art &amp; Collectibles</Link>
        <Link onClick={() => this.setCategory("craft-supplies")} to="/craft-supplies" className="category">Craft Supplies</Link>
        <Link onClick={() => this.setCategory("gifts")} to="/gifts" className="category">Gifts</Link>  
    </div>
  )
}

export default Category
