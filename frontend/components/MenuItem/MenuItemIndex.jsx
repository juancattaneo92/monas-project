import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Category from '../Category/Category';

const MenuItemIndex = () =>  {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("Error");
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(`${window.location.hash.split("/")[2]}`)
  const [oldCategory, setOldCategory] = useState(`${window.location.hash.split("/")[2]}`)

  useEffect(() => {  
    if((oldCategory !== category) || (items.length === 0)){
      setOldCategory(category)
      let mounted = true
      fetch(`api/menu-items/${category}`)
        .then(res => res.json())
        .then( (items) => {
          if(mounted) {
            setItems(items)
            setLoading(false) 
          }
        })
        .catch(error => {
          setError(error)
          console.log(error)})
        
      return () => {
        mounted = false
      }
    }
  }, [items, category])
  // }, []) 

// Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.


  // const getItems = async() => {
  //   const category = window.location.hash.split("/")[2]
  //   const response = await fetch(`api/menu-items/${category}`)
  //   const items = await response.json()
  //   setItems(items)
  // }
  
  // useEffect(() => {  
  //   let mounted = true
  //     getItems()
  //       if(mounted) {
  //         getItems()
  //         setLoading(false) 
  //       }
  //   return () => mounted = false
  // }, [])



// useEffect(() => {
//         let ignore = false;
//         const timeout = setTimeout(() => {
//             const fetchData = async () => {
//                 try {
//                     setLoading(true);
//                     setError({});
//                     const response = await getItems();
//                     if (!ignore) setItems(response['data']);
//                 } catch (err) {
//                     setError(err);
//                 }
//                 setLoading(false);
//             };
//             fetchData();
//         });
//         return () => {
//             ignore = true;
//             clearTimeout(timeout);
//         };
//     }, [items]);



return (
  <div>
    { loading ? <h1 className="m-t">Loading...</h1> : 
    <div className="menu-index">

     <div className="menu-navBar-section">
        <div className="menu-navBar-container">
            <Category category={category} setCategory={setCategory} />
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
  }</div>
  )
}

export default MenuItemIndex;

//   return (
//     <div className="menu-index">
//       <section className="menu-index-section">
//         <div className="menu-index-container">
//           <div className="wrapper-menu-index">
//             {}
//             {fries.map(fry => {
//               return (
//                 <div key={fry.id}>{fry.name}
//                 {fry.photo}</div>
//               )
//             })}
//             {/* {burgers} */}
//             {/* {items.map(item => {
//                   console.log(item)
//               return (
//                 <ul className="menu-item-index" key={item.id}>
//                   <img src={item.photo} alt=""/>
//                   <div className="menu-details">
//                     <div className="menu-name">
//                       <li>{item.name}</li>
//                       <li>$ {item.price}</li>
//                     </div>
//                     <li>{item.description}</li>
//                     <button className='action-button-b menu-items'>Take me Home</button>
//                   </div>
//                 </ul>
//               )
//             })} */}

//           </div>
//           <div className="shopping-cart-index">
//             <h1 className="current-order-title">Ready To Order?</h1>
//           </div> 
//         </div>
//       </section>
//     </div>
//   )
// }



  // const categories = ["Burgers", "Salads", "Starters", "Fries", "Un-Burgers", "Beverages", "Sides"]

        /* <div className="menu-navBar-section">
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
      </div> */
