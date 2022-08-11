import { ADD_CART } from "@actions/actionTypes";
const initialState = {
    carts: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_CART:
            return { ...state, carts: [...state.carts, action.data] }
        default:
            return state;
    }
};

