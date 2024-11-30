import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PRODUCT_GET_PENDING, CART_POST_PENDING } from "../saga/main/action";
import { UserHeader } from "../components/headers/UserHeader";

const Details = () => {
    const { id } = useParams(); 
    console.log(id);

    const dispatch = useDispatch();
    const product = useSelector((state) => state.productReducer);
    const products = product?.product?.product || [];

    const [selectedProduct, setSelectedProduct] = useState(null);

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    useEffect(() => {
        dispatch({ type: PRODUCT_GET_PENDING });
    }, [dispatch]);

    useEffect(() => {
        const proDetails = products.find((val) => val._id === id);
        setSelectedProduct(proDetails);
    }, [products, id]);

    const addCart = (productId) => {
        if (!user) {
            alert("Please log in to add items to the cart.");
            return;
        }

        const data = {
            product: productId,
            user: user._id,
        };

        dispatch({ type: CART_POST_PENDING, payload: data });
    };

    if (selectedProduct) {

        return (
            <>
                <UserHeader />
                <div className="container mt-5 col-6">
                    <div className="card">
                        <img
                            src={selectedProduct.productImage}
                            alt={selectedProduct.productName}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{selectedProduct.productName}</h5>
                            <p className="card-text">{selectedProduct.productDesc}</p>
                            <p className="card-text">Price: ${selectedProduct.productPrice}</p>
                            <button
                                onClick={() => addCart(selectedProduct._id)}
                                className="btn btn-primary"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Details;
