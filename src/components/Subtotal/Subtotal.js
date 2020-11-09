import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { Button } from '@material-ui/core';

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({0} items):
                            <strong>{` ${0}`}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
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
