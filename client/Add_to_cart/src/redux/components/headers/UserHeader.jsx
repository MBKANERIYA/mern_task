import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CART_GET_PENDING, PRODUCT_GET_PENDING } from '../../saga/main/action'

export let UserHeader = () => {
  let navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem("user"))
  let cart = useSelector((state) => state.productReducer)

  const carts = cart?.cart?.cart || [];


  let logout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={"/home"} class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link to={"/about"} class="nav-link" href="#">About</Link>
              </li>
              <li class="nav-item">
                <Link to={"/cart"} class="nav-link" href="#">Cart&nbsp;&nbsp;({carts.length})</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
          </div>
          <p className='me-5 pt-3'>{user.email}</p>
          <div className="logout">
            <button className='btn btn-danger' onClick={logout}>LOGOUT</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export const AdminHeader = () => {

  let navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem("user"))


  let logout = () => {
    localStorage.clear()
    navigate("/")
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={"/dashboard"} class="nav-link active" aria-current="page" href="#">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link to={"/product"} class="nav-link" href="#">Product</Link>
              </li>
              <li class="nav-item">
                <Link to={"/order"} class="nav-link" href="#">Order</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
          </div>
          <p className='me-5 pt-3'>userName:-{user.email}</p>
          <div className="logout">
            <button className='btn btn-danger' onClick={logout}>LOGOUT</button>
          </div>
        </div>
      </nav>
    </div>
  )
}


