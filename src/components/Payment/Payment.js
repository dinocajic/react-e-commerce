import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import './Payment.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getCartTotal } from '../../reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';

function Payment() {
    const history = useHistory();

    const [{cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Generate Special Stripe Secret which allows us to change the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currency subunit (i.e. $10 == 10x100 == 1000 pennies)
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });

            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, []);

    console.log('The secret is >>> ', clientSecret);

    const handleSubmit = async (e) => {
        // Stripe payment processing
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_CART'
            })

            // Replace instead of push since you don't want them to come back to the payment page
            history.replace('/orders');
        })
    };

    const handleChange = e => {
        // Listen for changes in the CardElement
        // Display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '')
    };

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
                </h1>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>

                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 Creative St.</p>
                        <p>Atlanta, GA 30331</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className='payment_items'>
                        {
                            cart.map((item) => (
                                <CheckoutProduct 
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>                

                    <div className='payment_details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment_priceContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
