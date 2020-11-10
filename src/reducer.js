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
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            };

            // If all of the ID's are the same
            // const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            // let newCart = [...state.cart];

            // if (index >= 0) {
            //     newCart.splice(index, 1);
            // } else {
            //     console.warn(`Can't remove product (id: ${action.id}) as it's not in the cart.`)
            // }

            // return {
            //     ...state,
            //     cart: newCart,
            // }
        default:
            return state;
    }
};

export default reducer;