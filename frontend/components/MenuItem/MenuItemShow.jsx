import React, { useState } from 'react'

export default function MenuItemIndex() {
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [ingredients, setIngredients] = useState()
  const [size, setSize] = useState()
  
  return(
      <section className="menu-show-section">
          <div className="wrapper-menu-show">

          </div>
      </section>
  )
}
