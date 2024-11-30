import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CART_DELETE_PENDING, CART_GET_PENDING } from '../saga/main/action'
import { UserHeader } from '../components/headers/UserHeader'

const Cart = () => {

  let dispatch = useDispatch()
  let cart = useSelector((state) => state.productReducer)

  const carts = cart?.cart?.cart || [];
  console.log(carts, "gfhjkl");


  const totalPrice = carts.reduce((total, val) => {
    const price = val.product.productPrice
    const quantity = val.quentity
    return total + (price * quantity);
  }, 0)

  let removeFromCart = (id) => {
    console.log(id);
    dispatch({ type: CART_DELETE_PENDING, payload: id })
    dispatch({ type: CART_GET_PENDING })
  }

  useEffect(() => {
   
      dispatch({ type: CART_GET_PENDING });
    
  }, []);


  return (
    <div>
      <UserHeader />
      <div className="cards d-flex flex-wrap">
        {carts.map((val, index) => (
          <div className="card col-3 p-5" key={val._id}>
            <img src={val.product.productImage} className="card-img-top"
              alt={val.product.productName} />
            <div className="card-body">
              <h5 className="card-title">{val.product.productName}</h5>
              <p className="card-text">{val.product.productDesc}</p>
              <p className="card-text">Price: ${val.product.productPrice}</p>
              <div className="qty">
                <span className="card-text">qty: {val.quentity}</span>
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => removeFromCart(val._id)}>productRemove</button>
          </div>
        ))}
      </div>
      <p>Total Price: {totalPrice}</p>
      <button className='btn btn-success'>Order Placed</button>


    </div>
  )
}

export default Cart