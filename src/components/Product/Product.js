import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../../StateProvider';

function Product({id, title, author, description, image, price, rating}) {

    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    };

    // [state, dispatch]
    const [{cart}, dispatch] = useStateValue();

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
        <Card 
            className='col-xs-12 col-sm-6 col-md-4 col-lg-3 m-1' 
            style={{maxWidth: '325px', paddingTop: '10px'}}>

            <Card.Img 
                variant="top" 
                src={image} 
                style={{maxHeight: '250px', width: '100%', objectFit: 'none', objectPosition: 'center'}} 
                alt={title} 
                title={title}
            />

            <Card.Body className='card-body d-flex flex-column'>
                <Card.Title title={title}>
                    {truncate(title, 40)}
                </Card.Title>

                <Card.Text>
                    {truncate(description, 100)} 
                </Card.Text>

                <Card.Text className='mt-auto'>
                    <small>$</small>
                    <strong>{price.toFixed(2)}</strong>
                </Card.Text>

                <Card.Text style={{display: 'flex'}}>
                    {
                        Array(rating).fill().map((_, i) => (
                            <p key={i}>⭐</p>
                        ))
                    }
                </Card.Text>

                <Button 
                    variant="outline-primary bottom" 
                    onClick={addToCart}
                >
                    Add to Cart
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Product;
