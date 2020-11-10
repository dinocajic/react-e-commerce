import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { Button } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';
import { getCartTotal } from '../../reducer';

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items):
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <Button variant='outlined' color='primary' size='small'>
                Proceed to Checkout
            </Button>
        </div>
    )
}

export default Subtotal;
