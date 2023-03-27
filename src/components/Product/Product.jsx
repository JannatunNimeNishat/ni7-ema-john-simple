import React from 'react';
//css
import './Product.css'
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props);
    const { name, seller, img, price, ratings } = props.product;
    //destructuring
    const handelAddToCart = props.handelAddToCart;

    // const handelAddToCart = (product) =>{
    //     console.log('product added',product);
    // }



    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: ${seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={() => handelAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;