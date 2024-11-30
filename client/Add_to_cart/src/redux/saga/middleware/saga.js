const { takeLatest } = require("redux-saga/effects");
const { PRODUCT_GET_PENDING, PRODUCT_DELETE_PENDING, PRODUCT_POST_PENDING, CART_POST_PENDING, CART_GET_PENDING, CART_UPDATE_PENDING, CART_DELETE_PENDING } = require("../main/action");
const { handle_get_product, handle_delete_product, handle_post_product, handle_post_cart, handle_get_cart, handle_update_cart, handle_delete_cart } = require("./manage");

function* handle_get_product_saga() {
    yield takeLatest(PRODUCT_GET_PENDING, handle_get_product)
}
function* handle_delete_product_saga() {
    yield takeLatest(PRODUCT_DELETE_PENDING, handle_delete_product)
}
function* handle_post_product_saga() {
    yield takeLatest(PRODUCT_POST_PENDING, handle_post_product)
}
function* handle_post_cart_saga() {
    yield takeLatest(CART_POST_PENDING, handle_post_cart)
}
function* handle_get_cart_saga() {
    yield takeLatest(CART_GET_PENDING, handle_get_cart)
}
function* handle_update_cart_saga() {
    yield takeLatest(CART_UPDATE_PENDING, handle_update_cart)
}
function* handle_delete_cart_saga() {
    yield takeLatest(CART_DELETE_PENDING, handle_delete_cart)
}

export { handle_get_product_saga, handle_delete_product_saga, handle_post_product_saga, handle_post_cart_saga, handle_get_cart_saga, handle_update_cart_saga, handle_delete_cart_saga }           