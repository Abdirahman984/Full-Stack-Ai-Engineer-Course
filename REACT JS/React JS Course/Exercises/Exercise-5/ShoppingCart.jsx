import { useState } from "react";

function ShoppingCart() {
    const [Products, setProducts] = useState([])
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")

    const handleAddProduct = () => {
        if (productName.trim == "" && productPrice.trim) {
            alert("you must write somethng")
        } else {
            const newProduct = {
                id: crypto.randomUUID(),
                name: productName,
                price: parseFloat(productPrice)
                quantity: 1
            }

            setProducts([...Products, newProduct])
            console.log(newProduct)

            setProductName("")
            setProductPrice("")
        }
    }

    const removeProductCart = (id) => {
        const updatedProducts = Products.filter(Product => Product.id !== id)
        setProducts(updatedProducts)

    }

    const degresQuantity = (id) => {
        const updatedProductsQuantity = Products.map(Product => (
            Product.id === id && Product.quantity > 1 ? { ...Product, quantity: Product.quantity - 1 } : Product
        ))
        console.log(updatedProductsQuantity)
        setProducts(updatedProductsQuantity)
    }

    const increaseQuantity = (id) => {
        const updatedProducts = Products.map(Product => (
            Product.id === id ? { ...Product, quantity: Product.quantity + 1 } : Product

        ))

        setProducts(updatedProducts)
    }

    const totalPrice = Products.reduce((total, Product) => total + Product.price * Product.quantity,0)


    return (
        <div className="container">
            <h2>shopping cart</h2>
            <h3>add shopping carts</h3>
            <input type="text" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} value={productName} />
            <input type="text" placeholder="Product Price" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
            <button className="btn1" onClick={handleAddProduct}>add to cart</button>

            <div>
                {
                    Products.length > 0 ? (
                        <div>
                            <h3>add products carts</h3>
                            <ul>
                                {
                                    Products.map(Product => (
                                        <li key={Product.id}> <strong>{Product.name}</strong> - ${Product.price.toFixed(2)}
                                            <div>

                                                Qauntity: <button className="btn2" onClick={() => degresQuantity(Product.id)}>-</button> {Product.quantity}
                                                <button className="btn2" onClick={() => increaseQuantity(Product.id)}>+</button>
                                            </div>
                                            <button className="remove" onClick={(id) => removeProductCart(Product.id)}>Remove</button>
                                        </li>
                                    ))
                                }
                            </ul>
                            <h4> toatl amount is : ${totalPrice}</h4>
                        </div>


                    ) : (
                        <p>product cart is empty</p>
                    )
                }
            </div>
        </div>
    )
}
export default ShoppingCart;