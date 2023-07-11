import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;

    


    return (
        <div className='product'>
            <img src={img} alt="product image" />
            <h6 className='product-name'>{name}</h6>
            <div className='product-info'>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>

        </div>
    );
};

export default Product;