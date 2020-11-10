import { Button } from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, title, image, price, rating}) {

    const [{cart}, dispatch] = useStateValue();

    // Dispatch an action into the reducer
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img 
                src={image} 
                className='checkoutProduct_image' 
                alt={title} 
            />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <p className='checkoutProduct_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p key={i}>⭐</p>
                            ))
                    }
                </p>

                <Button 
                    variant='outlined' 
                    color='primary' 
                    size='small'
                    onClick={removeFromCart}
                >
                    Remove from Cart
                </Button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
