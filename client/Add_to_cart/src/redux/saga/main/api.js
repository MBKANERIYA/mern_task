import axios from "axios";

const { BASE_URL, GET_PRODUCT, DELETE_PRODUCT, POST_PRODUCT, POST_CART, GET_CART, UPDATE_CART, DELETE_CART } = require("../constant")

let get_product = async (action) => {
    console.log(action, "get api");

    let { data, status } = await axios.get(BASE_URL + GET_PRODUCT)
    console.log(data);
    return { data, status }
}

let post_product = async (action) => {
    let { data, status } = await axios.post(BASE_URL + POST_PRODUCT, action.payload)
    return { data, status }
}

let delete_product = async (action) => {
    console.log(action);

    let { data, status } = await axios.delete(BASE_URL + DELETE_PRODUCT + action.payload)
    console.log(data);

    return { data, status }
}

let post_cart = async (action) => {
    console.log(action);

    let { data, status } = await axios.post(BASE_URL + POST_CART, action.payload)
    return { data, status }
}

let get_cart = async (action) => {
    console.log(action);

    let { data, status } = await axios.get(BASE_URL + GET_CART)
    return { data, status }
}

let delete_cart = async (action) => {
    let { data, status } = await axios.delete(BASE_URL + DELETE_CART + action.payload)
    return { data, status }
}

let update_cart = async (action) => {
    console.log(action, "update");

    let { data, status } = await axios.put(BASE_URL + UPDATE_CART + action.ayload.id, action.payload)
    return { data, status }
}

export { get_product, delete_product, post_product, post_cart, get_cart, update_cart, delete_cart }