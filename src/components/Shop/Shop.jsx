import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
//css
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //2nd
    /* useEffect(()=>{
        // console.log(products);
        const storedCart = getShoppingCart();
        //step 1: get id
        for(const id in storedCart){
            //step 2 get the product using id
            const addedProduct = products.find(product => product.id == id);
            //step 3: get quantity of the product
             const quantity = storedCart[id];
            addedProduct.quantity = quantity;
           console.log(addedProduct);
        }
    },[products]) */


    //2nd
    useEffect(() => {
        //step 1: get data from local storage
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(addedProduct);
        for (const id in storedCart) {
            //step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id == id);
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4: add the addedProduct to the savedCart array
                savedCart.push(addedProduct)
            }
            console.log(id, ":", storedCart[id], ":", addedProduct);
        }
        console.log('savedCart',savedCart);
        //step 5 set the cart
        setCart(savedCart)
    }, [products])




    // event handler for product
    const handelAddToCart = (product) => {

        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;