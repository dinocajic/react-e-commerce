export const initialState = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) => (
    cart?.reduce((amount, item) => item.price + amount, 0)
)

// Reducer states how are we able to displatch the action into the data layer
// action - what are you trying to do? add to cart? remove from cart?
const reducer = (state, action) => {

    console.log(action); // @todo remove

    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        default:
            return state;
    }
};

export default reducer;