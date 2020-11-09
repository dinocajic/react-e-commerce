export const initialState = {
    cart: [],
    user: null,
};

// Reducer states how are we able to displatch the action into the data layer
// action - what are you trying to do? add to cart? remove from cart?
const reducer = (state, action) => {

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