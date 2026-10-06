import { createContext } from "react";

const cartContext = createContext([])

export default cartContext;

// import { useState } from "react";
// import cartContext from "../Exercises/Exercise-16/shopping";
// import ShoppingCart from "../Exercises/Exercise-16/ShoppingCart";
// import SummaryCart from "../Exercises/Exercise-16/SummaryCart";
// const App = () => {
//   const [cartItem, setCartItem] = useState([])

//   const addToCart = (item) => {
//     setCartItem([...cartItem, item])
//   }

//   const removeFromCart = (itemId) => {
//     setCartItem(cartItem.filter((item) => item.id !== itemId));
//   };

//   const itemValue = { cartItem, addToCart, removeFromCart };


//   return (
//     <cartContext.Provider value={itemValue}>
//       <ShoppingCart itemId={1} itemName="widget" price={19} />
//       <ShoppingCart itemId={2} itemName="gadget" price={29} />
//       <SummaryCart/>
//     </cartContext.Provider>
//   )
// }

// export default App;