// import { useState } from "react";

// function Display() {
//     const [Products, setProducts] = useState([])
//     const [productName, setProductName] = useState("")
//     const [productPrice, setProductPrice] = useState("")

//     const handleAddProduct = () => {
//         if (productName.trim === "" || productPrice.trim === "") {
//             alert("You Have TO Write Something")
//         } else {
//             const newProducts = {
//                 id: crypto.randomUUID(),
//                 name: productName,
//                 price: parseFloat(productPrice),
//                 quantity: 1,
//             }
//             setProducts([...Products, newProducts])
//             setProductName("")
//             setProductPrice("")

//         }

//     }

//     const remeveProducts = (id) => {
//         console.log("id", id)
//         const updatedProducts = Products.filter(Product => Product.id !== id)
//         setProducts(updatedProducts)
//     }

//     const increaseQuantity = (id) => {
//         const updateQuantity = Products.map(Product => (
//             Product.id === id ? { ...Product, quantity: Product.quantity + 1 } : Product
//         ))

//         // console.log(updateQuantity)
//         setProducts(updateQuantity)
//     }

//     const degresQuantity = (id) => {
//         const updatedProducts = Products.map(Product => (
//             Product.id === id && Product.quantity > 1 ? { ...Product, quantity: Product.quantity - 1 } : Product
//         ))

//         setProducts(updatedProducts)
//     }

//     const totalPrice = Products.reduce((total, Product) => total +
//         Product.price * Product.quantity, 0)

//     return (
//         <div className="container">
//             <h2>shopping carts</h2>
//             <h3>add shopping carts</h3>
//             <input type="text" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} value={productName} />
//             <input type="number" placeholder="Product Price" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
//             <button className="btn1" onClick={handleAddProduct}>add to carts</button>

//             <div>
//                 {
//                     Products.length > 0 ? (
//                         <div>
//                             <h3>add to product cart</h3>
//                             <ul>
//                                 {
//                                     Products.map(Product => (
//                                         <li key={Product.id}><strong>{Product.name}</strong> - {`${Product.price.toFixed(2)} $`}
//                                             <div>
//                                                 Quantity :  <button className="btn2" onClick={() => degresQuantity(Product.id)}>-</button>
//                                                 {Product.quantity}

//                                                 <button className="btn2" onClick={() => increaseQuantity(Product.id)}>+</button>
//                                             </div>
//                                             <button className="remove" onClick={() => remeveProducts(Product.id)}> Remove</button>

//                                         </li>
//                                     ))
//                                 }
//                             </ul>

//                             <h4> Total Amout Is : ${totalPrice}</h4>
//                         </div>
//                     )

//                         : (
//                             <p>product carts is empty</p>
//                         )
//                 }
//             </div>
//         </div>
//     )

// }

// export default Display;


