import { all } from "redux-saga/effects";

const { handle_get_product_saga, handle_delete_product_saga, handle_post_product_saga, handle_post_cart_saga, handle_get_cart_saga, handle_update_cart_saga, handle_delete_cart_saga } = require("./saga");

function* rootSaga() {
    yield all([
        handle_get_product_saga(),
        handle_delete_product_saga(),
        handle_post_product_saga(),
        handle_post_cart_saga(),
        handle_get_cart_saga(),
        handle_update_cart_saga(),
        handle_delete_cart_saga()
    ])
}

export default rootSaga

