import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_DELETE_PENDING, PRODUCT_GET_PENDING, PRODUCT_POST_PENDING } from '../saga/main/action';
import { AdminHeader } from '../components/headers/UserHeader';


const Product = () => {

  const [addproduct, setAddproduct] = useState({
    productName: "",
    productDesc: "",
    productPrice: "",
    productImage: null 
  });

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);

  const products = product?.product?.product || [];
  console.log(products);

  const createProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", addproduct.productName);
    formData.append("productDesc", addproduct.productDesc);
    formData.append("productPrice", addproduct.productPrice);

    if (addproduct.productImage) {
      formData.append("productImage", addproduct.productImage);
    }

    dispatch({ type: PRODUCT_POST_PENDING, payload: formData });
  };

  const handleProduct = (e) => {
    setAddproduct({ ...addproduct, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAddproduct({ ...addproduct, productImage: file });
    }
  };

  const deleteProduct = (id) => {
    dispatch({ type: PRODUCT_DELETE_PENDING, payload: id });
  };

  useEffect(() => {
    dispatch({ type: PRODUCT_GET_PENDING });
  }, []);


  return (
    <>
      <AdminHeader />
      <input type="text" name='productName' value={addproduct.productName} onChange={handleProduct} placeholder='productName'/>
      <input type="text" name='productDesc' value={addproduct.productDesc} onChange={handleProduct} placeholder='productDesc'/>
      <input type="number" name='productPrice' value={addproduct.productPrice} onChange={handleProduct} placeholder='productPrice'/>
      <input type="file" name="productImage" accept="image/*"
        onChange={handleImageChange}
      />
      <button onClick={createProduct}>Add</button>
      <table border={"2px"} cellPadding={"10px"} cellSpacing={"10px"} className='mt-5'>
        <thead>
          <tr className='text-center'>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((val, index) => (
            <tr key={val._id} style={{ textAlign: 'center' }}>
              <td>{index + 1}</td>
              <td>{val.productName}</td>
              <td>{val.productDesc}</td>
              <td>{val.productPrice}</td>
              <td>{val.productImage}</td>
              <td><button onClick={() => deleteProduct(val._id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Product;
