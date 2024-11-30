const { PRODUCT_GET_PENDING, PRODUCT_GET_SUCCESS, PRODUCT_GET_ERROR, PRODUCT_DELETE_PENDING, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_ERROR, PRODUCT_POST_PENDING, PRODUCT_POST_ERROR, PRODUCT_POST_SUCCESS, CART_POST_PENDING, CART_POST_ERROR, CART_POST_SUCCESS, CART_GET_PENDING, CART_GET_ERROR, CART_GET_SUCCESS, CART_UPDATE_SUCCESS, CART_UPDATE_PENDING, CART_UPDATE_ERROR, CART_DELETE_PENDING, CART_DELETE_ERROR, CART_DELETE_SUCCESS } = require("./action")

let initialState = {
    product: [],
    cart: [],
    isLoading: false,
    isError: true
}

let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PRODUCT_GET_PENDING, PRODUCT_DELETE_PENDING, PRODUCT_POST_PENDING, CART_POST_PENDING, CART_GET_PENDING, CART_UPDATE_PENDING, CART_DELETE_PENDING): {
            return {
                isLoading: true
            }
        }
        case PRODUCT_GET_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: action.payload,
            }
        }
        case PRODUCT_DELETE_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.filter((val) => val._id)
            }
        }
        case PRODUCT_POST_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.concat(action.payload)
            }
        }
        case CART_POST_SUCCESS: {
            return {
                isLoading: false,
                cart: state.cart.concat(action.payload)
            }
        }
        case CART_GET_SUCCESS: {
            return {
                isLoading: false,
                cart: action.payload
            }
        }
        case CART_UPDATE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((val) => val._id === action.payload.cart._id
                    ? { ...val, quentity: action.payload.cart.quentity }
                    : val)
            }
        }
        case CART_DELETE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter((val) => val._id !== action.payload)
            }
        }
        case (PRODUCT_GET_ERROR, PRODUCT_DELETE_ERROR, PRODUCT_POST_ERROR, CART_POST_ERROR, CART_GET_ERROR, CART_UPDATE_ERROR, CART_DELETE_ERROR): {
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default productReducer