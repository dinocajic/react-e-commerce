import React from 'react'
import './Product.css';
import Button from '@material-ui/core/Button';

import AlgorithmsBook from '../../assets/img/books/an-illustrative-introduction-to-algorithms.jpg';

function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>
                    This book was written to fill the gap that exists when Computer Science students, and programmers, 
                    attempt to learn and analyze the different algorithms that currently exist.
                </p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>49.99</strong>
                </p>

                <div className='product_rating'>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>

            <img 
                src={AlgorithmsBook} 
                alt='An Illustrative Introduction to Algorithms by Dino Cajic' 
            />

            <Button variant='outlined' color='primary' size='large'>
                Add to Cart
            </Button>
        </div>
    )
}

export default Product
