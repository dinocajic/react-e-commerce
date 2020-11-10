import React from 'react'
import './Product.css';
import Button from '@material-ui/core/Button';
import { useStateValue } from '../../StateProvider';

function Product({id, title, author, description, image, price, rating}) {

    // [state, dispatch]
    const [{cart}, dispatch] = useStateValue();

    console.log('Cart Content: ', cart);

    // Dispatch the item into the Data Layer
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };

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
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt={title + ' by ' + author} />

            <Button 
                variant='outlined' 
                color='primary' 
                size='large'
                onClick={addToCart}
            >
                Add to Cart
            </Button>
        </div>
    )
}

export default Product
