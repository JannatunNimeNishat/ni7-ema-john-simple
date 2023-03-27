import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
//css
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('../../../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // event handler for product
    const handelAddToCart = (product) =>{
        // console.log('product added',product);
        const newCart = [...cart, product]
        setCart(newCart);
        // console.log(newCart);

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handelAddToCart = {handelAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
                <p>Seleted items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;