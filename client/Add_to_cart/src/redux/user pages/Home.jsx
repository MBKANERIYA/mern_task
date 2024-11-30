import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CART_POST_PENDING, PRODUCT_GET_PENDING } from '../saga/main/action';
import { UserHeader } from "../components/headers/UserHeader"
import { Link } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);

  const products = product?.product?.product || [];
  console.log(products);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);


  const addCart = (id) => {
    let data = {
      product: id,
      user: user._id
    }
    dispatch({ type: CART_POST_PENDING, payload: data })
    dispatch({ type: PRODUCT_GET_PENDING });
  };

  useEffect(() => {
    dispatch({ type: PRODUCT_GET_PENDING });
  }, []);

  return (
    <>
      <UserHeader />
      <div className="cards d-flex flex-wrap ">
        {products.map((val, index) => (
          <div className="card p-5 col-3" key={val._id}>
            <img src={val.productImage} className="card-img-top"
              alt={val.productName} />
            <div className="card-body">
              <h5 className="card-title">{val.productName}</h5>
              <p className="card-text">{val.productDesc}</p>
              <p className="card-text">Price: ${val.productPrice}</p>
              <Link to={`/${val._id}`} className="btn btn-primary p-1">
                Product Details
              </Link>
              <button onClick={() => addCart(val._id)} className="btn btn-primary p-1 ms-2">
               Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
