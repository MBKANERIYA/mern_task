import { call, put } from "redux-saga/effects"
import { delete_cart, delete_product, get_cart, get_product, post_cart, post_product, update_cart } from "../main/api"
import { CART_DELETE_ERROR, CART_DELETE_SUCCESS, CART_GET_ERROR, CART_GET_SUCCESS, CART_POST_SUCCESS, CART_UPDATE_ERROR, CART_UPDATE_SUCCESS, PRODUCT_DELETE_ERROR, PRODUCT_DELETE_SUCCESS, PRODUCT_GET_ERROR, PRODUCT_GET_SUCCESS, PRODUCT_POST_ERROR, PRODUCT_POST_SUCCESS } from "../main/action"

function* handle_get_product(action) {
    try {
        let { data, status } = yield call(get_product, action)
        console.log(data);

        yield put({ type: PRODUCT_GET_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: PRODUCT_GET_ERROR, payload: err })
    }
}

function* handle_post_product(action) {
    try {
        let { data, status } = yield call(post_product, action)
        yield put({ type: PRODUCT_POST_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: PRODUCT_POST_ERROR, payload: err })

    }
}

function* handle_delete_product(action) {
    try {
        let { data, status } = yield call(delete_product, action)

        yield put({ type: PRODUCT_DELETE_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: PRODUCT_DELETE_ERROR, payload: err })
    }
}

function* handle_post_cart(action) {
    try {
        let { data, status } = yield call(post_cart, action)

        yield put({ type: CART_POST_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: CART_UPDATE_ERROR, payload: err })
    }
}

function* handle_get_cart(action) {
    try {
        let { data, status } = yield call(get_cart, action)
        yield put({ type: CART_GET_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: CART_GET_ERROR, payload: err })
    }
}

function* handle_update_cart(action) {
    try {
        let { data, status } = yield call(update_cart, action)
        yield put({ type: CART_UPDATE_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: CART_UPDATE_ERROR, payload: err })
    }
}

function* handle_delete_cart(action) {
    try {
        let { data, status } = yield call(delete_cart, action)
        yield put({ type: CART_DELETE_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: CART_DELETE_ERROR, payload: err })
    }
}
export { handle_get_product, handle_delete_product, handle_post_product, handle_post_cart, handle_get_cart, handle_update_cart, handle_delete_cart }