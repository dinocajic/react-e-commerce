import React from 'react'
import './Product.css';
import Button from '@material-ui/core/Button';

function Product({title, author, description, image, price, rating}) {
    return (
        <div className='product'>
            <div className='product_info'>
                <p className='product_title'>{title.substr(0, 45)}</p>

                <p>{description.substr(0, 110)}</p>

                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt={title + ' by ' + author} />

            <Button variant='outlined' color='primary' size='large'>
                Add to Cart
            </Button>
        </div>
    )
}

export default Product
