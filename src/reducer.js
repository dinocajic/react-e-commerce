export const initialState = {
    cart: [],
    user: null,
    company: 'E-Commerce Store',
};

export const getCartTotal = (cart) => (
    cart?.reduce((amount, item) => item.price + amount, 0)
)

// Reducer states how are we able to displatch the action into the data layer
// action - what are you trying to do? add to cart? remove from cart?
const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'EMPTY_CART':
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
};

export default reducer;